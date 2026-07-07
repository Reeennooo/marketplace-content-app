import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr';
import {resolve} from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: ['982646ff7257.ngrok-free.app']
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),

      app: resolve(__dirname, "src/app"),
      shared: resolve(__dirname, "src/shared"),
      entities: resolve(__dirname, "src/entities"),
      features: resolve(__dirname, "src/features"),
      pages: resolve(__dirname, "src/pages"),
      processes: resolve(__dirname, "src/processes"),
    },
  },
})
