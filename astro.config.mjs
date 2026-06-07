import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// User site (username.github.io) — site lives at root, no base path needed.
// Replace the site URL with your own once your GitHub username is known.
export default defineConfig({
  site: 'https://efearun.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
