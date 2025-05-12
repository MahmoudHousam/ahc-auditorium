import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // run npm i -D @types/node since TS needs typings
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), flowbiteReact()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Cleaner imports
      '@components': path.resolve(__dirname, './src/components'),
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Express backend
        changeOrigin: true,
      }
    }
  }
})