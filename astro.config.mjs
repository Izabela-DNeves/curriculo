// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://izabela-dneves.github.io',
  base: '/curriculo',
  build: { inlineStylesheets: 'always' },
  vite: { plugins: [tailwindcss()] },
});
