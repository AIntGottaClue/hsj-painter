import { defineConfig } from 'astro/config';
// Set SITE and BASE for GitHub Pages previews; for Cloudflare Pages leave BASE empty.
export default defineConfig({
  site: process.env.SITE_URL || 'https://aintgottaclue.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
});
