import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from 'tailwindcss';

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio-react',
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwind],
    },
  },
});
