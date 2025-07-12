// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Memory-2/', // ← строго как имя репозитория на GitHub
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
