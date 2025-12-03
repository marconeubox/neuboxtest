import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [react(), tailwind()],

  // 🚨 Cloudflare Pages SIEMPRE sirve desde "/"
  base: "/",

  // 🚨 Importante para SSR en Cloudflare Pages
  output: "server",

  // 🚨 Cloudflare adapter sin override
  adapter: cloudflare(),
});
