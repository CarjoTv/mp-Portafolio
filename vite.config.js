import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        proyectos: resolve(__dirname, 'proyectos.html'), // <--- Asegúrate de que el nombre coincida
      },
    },
  },
});