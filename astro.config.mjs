// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change `site` to your custom domain (e.g. https://aditya.dev) once it's connected.
// Until then it's https://<github-username>.github.io
export default defineConfig({
  site: 'https://guptaaditya95.github.io',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});
