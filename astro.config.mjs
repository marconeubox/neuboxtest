import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  integrations: [react(), tailwind()],

  // en dev usa '/', en prod usa '/astro/'
  base: isProd ? '/astro/' : '/',

  // mantenemos dist y copiamos selectivamente
  outDir: './dist',

  adapter: cloudflare()
});