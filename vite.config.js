// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Memory-2/', // чтобы работало и на GitHub Pages, и в Cordova
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
