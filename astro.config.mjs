// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mateusneves.github.io',
  base: '/izabela-neves-cv',
  build: { inlineStylesheets: 'always' },
  vite: { plugins: [tailwindcss()] },
});
