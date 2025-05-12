import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path" // you should run `npm i @type/node -D` since TS needs typings

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
      "@components": path.resolve(__dirname, './src/components'),
    }

  },
  server: {
    proxy: {
      '/api': {
        target: "https://localhost:5000", // this is for the Express backend
        changeOrigin: true
      }
    }
  },
  optimizeDeps: {
    include: [ 'tailwindcss/version' ]
  }
})
