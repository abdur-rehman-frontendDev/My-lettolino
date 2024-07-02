// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/My-lettolino/',
  plugins: [react()],
  server: {
    port: 4000,
    open: true, // Opens the browser after the server starts
  },
});
