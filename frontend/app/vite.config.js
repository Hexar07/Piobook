import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwliwnd from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwliwnd(),
    react(),
  ],
})
