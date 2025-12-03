#!/usr/bin/env node
import fs from 'node:fs/promises';
import fssync from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function readFileSafe(p) {
  return await fs.readFile(p, 'utf8');
}

function extractTag(html, tagName) {
  const lower = html.toLowerCase();
  const openIdx = lower.indexOf(`<${tagName}`);
  if (openIdx === -1) {
    throw new Error(`No <${tagName}> start tag found`);
  }
  const openEnd = lower.indexOf('>', openIdx);
  if (openEnd === -1) {
    throw new Error(`No end of <${tagName}> start tag found`);
  }
  const closeTag = `</${tagName}>`;
  const closeIdx = lower.indexOf(closeTag, openEnd + 1);
  if (closeIdx === -1) {
    // Debug snippet to help diagnose
    const snippet = html.slice(openIdx, Math.min(openIdx + 500, html.length));
    throw new Error(`No closing </${tagName}> found after start. Snippet: ${snippet}`);
  }
  return html.slice(openEnd + 1, closeIdx);
}

async function copyDir(src, dest) {
  // Node 16+ supports fs.cp
  if (fs.cp) {
    await fs.cp(src, dest, { recursive: true });
    return;
  }
  // Fallback: simple recursive copy
  const entries = await fs.readdir(src, { withFileTypes: true });
  await ensureDir(dest);
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else if (entry.isFile()) {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

async function main() {
  // Paths
  const astroProjectRoot = path.resolve(__dirname, '..');
  const distDir = path.join(astroProjectRoot, 'dist');
  // Allow passing a slug or a path to index.html
  const arg = process.argv[2];
  let pageHtml;
  let outSlug;
  if (arg) {
    // If arg points to an html file, use it directly; else treat as slug under dist/
    const maybePath = path.isAbsolute(arg) ? arg : path.join(distDir, arg);
    if (maybePath.endsWith('.html') && fssync.existsSync(maybePath)) {
      pageHtml = maybePath;
      outSlug = path.basename(path.dirname(pageHtml));
    } else {
      // treat arg as slug directory under dist
      pageHtml = path.join(distDir, arg, 'index.html');
      outSlug = arg;
    }
  } else {
    // Default slug for postbuild compatibility
    pageHtml = path.join(distDir, 'space-travel', 'index.html');
    outSlug = 'space-travel';
  }
  const distAstroAssets = path.join(distDir, '_astro');

  // PHP webroot (repo root where PHP lives)
  const phpRoot = path.resolve(astroProjectRoot, '..', '..');
  const publicAstroDir = path.join(phpRoot, 'astro');
  const targetPageDir = path.join(publicAstroDir, outSlug);
  const targetHead = path.join(targetPageDir, 'head.html');
  const targetBody = path.join(targetPageDir, 'body.html');
  const publicAstroAssets = path.join(publicAstroDir, '_astro');

  // Read and extract
  const html = await readFileSafe(pageHtml);
  let head = '';
  let body = '';
  try {
    head = extractTag(html, 'head');
  } catch (e) {
    console.warn('[extract-fragments] head not found, continuing with empty head.');
  }
  try {
    body = extractTag(html, 'body');
  } catch (e) {
    console.warn('[extract-fragments] body not found, using full HTML as body.');
    body = html;
  }

  // Ensure dirs and write fragments
  await ensureDir(targetPageDir);
  await fs.writeFile(targetHead, head, 'utf8');
  await fs.writeFile(targetBody, body, 'utf8');

  // Copy Astro assets
  if (fssync.existsSync(distAstroAssets)) {
    await ensureDir(publicAstroDir);
    await copyDir(distAstroAssets, publicAstroAssets);
  }

  console.log('[extract-fragments] Wrote:', targetHead, 'and', targetBody);
  console.log('[extract-fragments] Copied assets to:', publicAstroAssets);
}

main().catch((err) => {
  console.error('[extract-fragments] Error:', err);
  process.exit(1);
});
