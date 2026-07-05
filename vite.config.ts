import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      jpg: {
        quality: 75,
      },
      jpeg: {
        quality: 75,
      },
      png: {
        quality: 80,
      },
      webp: {
        quality: 75,
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1500,
    assetsInlineLimit: 4096,
    cssMinify: true,
  },
})
