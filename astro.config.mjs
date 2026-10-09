// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Troque pela URL final (ex.: https://izabelaneves.com.br) antes de publicar
  site: 'https://izabelaneves.com.br',
  build: { inlineStylesheets: 'always' },
  vite: { plugins: [tailwindcss()] },
});
