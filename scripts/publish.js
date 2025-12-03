#!/usr/bin/env node

// Publish Astro build output to Laravel public/astro
// Usage:
//   node scripts/publish.js                # full publish
//   node scripts/publish.js --only=slug    # publish only one landing (folder/file)
// Flags:
//   --only=<slug>          Publish only dist/<slug> to public/astro/<slug>
//   --refresh-assets       Force full replacement of _astro even with --only
//   --no-assets            Skip copying _astro assets
// Env overrides:
//   ASTRO_DIST_DIR (default: ./dist)
//   LARAVEL_PUBLIC_ASTRO_DIR (default: ../../../public/astro relative to this script)

import fs from 'fs';
import fsp from 'fs/promises';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const log = (...args) => console.log('[publish]', ...args);
const warn = (...args) => console.warn('[publish:warn]', ...args);
const error = (...args) => console.error('[publish:error]', ...args);

function resolvePathSafe(p) {
  return path.resolve(__dirname, p);
}

async function exists(p) {
  try { await fsp.access(p, fs.constants.F_OK); return true; } catch { return false; }
}

async function rmrf(target) {
  if (!(await exists(target))) return;
  await fsp.rm(target, { recursive: true, force: true });
}

async function ensureDir(dir) {
  await fsp.mkdir(dir, { recursive: true });
}

async function copyFile(src, dest) {
  await ensureDir(path.dirname(dest));
  await fsp.copyFile(src, dest);
}

async function copyDir(src, dest) {
  await ensureDir(dest);
  const entries = await fsp.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(s, d);
    } else if (entry.isFile()) {
      await copyFile(s, d);
    }
  }
}

async function copyDirMerge(src, dest) {
  // Merge copy without deleting dest
  await ensureDir(dest);
  const entries = await fsp.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDirMerge(s, d);
    } else if (entry.isFile()) {
      await copyFile(s, d);
    }
  }
}

function parseArgs() {
  const args = process.argv.slice(2);
  const out = { only: null, refreshAssets: false, noAssets: false };
  for (const a of args) {
    if (a.startsWith('--only=')) out.only = a.split('=')[1]?.trim();
    else if (a === '--refresh-assets') out.refreshAssets = true;
    else if (a === '--no-assets') out.noAssets = true;
  }
  return out;
}

async function publishAssets(distDir, targetRoot, { replace }) {
  if (replace) log('Refreshing _astro assets (full replace)...');
  const srcAstro = path.join(distDir, '_astro');
  const dstAstro = path.join(targetRoot, '_astro');
  if (!(await exists(srcAstro))) {
    warn('No _astro directory found in dist (nothing to copy).');
    return;
  }
  if (replace) {
    await rmrf(dstAstro);
    await copyDir(srcAstro, dstAstro);
  } else {
    // merge copy so other landings keep working
    await copyDirMerge(srcAstro, dstAstro);
  }
}

async function publishOnly(distDir, targetRoot, slug, options) {
  const src = path.join(distDir, slug);
  const dst = path.join(targetRoot, slug);

  if (await exists(src)) {
    log(`Publishing only: ${slug}`);
    const stat = await fsp.lstat(src);
    if (stat.isDirectory()) {
      await rmrf(dst);
      await copyDir(src, dst);
    } else if (stat.isFile()) {
      await ensureDir(path.dirname(dst));
      await copyFile(src, dst);
    } else {
      error('Unsupported file type for --only path:', src);
      process.exit(1);
    }
  } else {
    // If someone passes slug that maps to dist/slug/index.html, allow shorthand
    const alt = path.join(distDir, slug, 'index.html');
    if (await exists(alt)) {
      log(`Publishing only (folder with index.html): ${slug}/`);
      await rmrf(dst);
      await copyDir(path.dirname(alt), dst);
    } else {
      error(`--only target not found: ${src}`);
      process.exit(1);
    }
  }

  if (!options.noAssets) {
    await publishAssets(distDir, targetRoot, { replace: options.refreshAssets });
  } else {
    log('Skipping _astro assets as requested (--no-assets).');
  }
}

async function publishAll(distDir, targetRoot) {
  await ensureDir(targetRoot);

  // 1) Replace _astro assets fully to avoid stale files
  await publishAssets(distDir, targetRoot, { replace: true });

  // 2) Copy everything else except _astro
  const items = await fsp.readdir(distDir, { withFileTypes: true });
  for (const it of items) {
    if (it.name === '_astro') continue;
    const src = path.join(distDir, it.name);
    const dst = path.join(targetRoot, it.name);

    if (it.isDirectory()) {
      log('Copying dir:', it.name);
      await rmrf(dst);
      await copyDir(src, dst);
    } else if (it.isFile()) {
      log('Copying file:', it.name);
      await copyFile(src, dst);
    }
  }
}

async function main() {
  const { only, refreshAssets, noAssets } = parseArgs();

  // Resolve defaults relative to this script's directory: app/astro/magical-main/scripts
  const distDir = resolvePathSafe(process.env.ASTRO_DIST_DIR || '../dist');
  // Laravel public is at app/public; our script is at app/astro/magical-main/scripts
  const targetRoot = resolvePathSafe(process.env.LARAVEL_PUBLIC_ASTRO_DIR || '../../../public/astro');

  log('distDir =', distDir);
  log('targetRoot =', targetRoot);
  if (only) log('only =', only);
  if (refreshAssets) log('refreshAssets = true');
  if (noAssets) log('noAssets = true');

  if (!(await exists(distDir))) {
    error('Dist directory not found. Run "npm run build" first.');
    process.exit(1);
  }

  await ensureDir(targetRoot);

  if (only) {
    await publishOnly(distDir, targetRoot, only, { refreshAssets, noAssets });
  } else {
    await publishAll(distDir, targetRoot);
  }

  log('Publish completed successfully.');
}

main().catch((e) => {
  error(e?.stack || e?.message || String(e));
  process.exit(1);
});
