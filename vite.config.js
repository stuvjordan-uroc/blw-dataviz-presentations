import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/blw-dataviz-presentations/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'slides/20260225-harley': resolve(__dirname, 'slides/20260225-harley/index.html'),
        'slides/20260827-hajnal-trounstine-simulation': resolve(__dirname, 'slides/20260827-hajnal-trounstine-simulation/index.html'),
        'slides/20261007-ehsr': resolve(__dirname, 'slides/20261007-ehsr/index.html'),
        // Add new presentations here as you create them
      },
    },
  },
  server: {
    open: true,
  },
});
