import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/blw-dataviz-presentations/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'slides/20260225-harley': resolve(__dirname, 'slides/20260225-harley/index.html'),
        // Add new presentations here as you create them
      },
    },
  },
  server: {
    open: true,
  },
});
