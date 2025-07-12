// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Memory-2/', // 👈 если репозиторий называется memory-map
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});

