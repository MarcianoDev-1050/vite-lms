import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/vite-lms/', // Asegúrate de usar el nombre correcto de tu repositorio
  plugins: [react()],
  build: {
    outDir: 'dist', // Asegura que el build se genere en "dist"
  },
});
