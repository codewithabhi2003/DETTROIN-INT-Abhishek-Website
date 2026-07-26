import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
  },
  build: {
    rollupOptions: {
      output: {
        // This Vite version (Rolldown-based) requires manualChunks to be
        // a function — the older object-map form no longer works.
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined
          if (
            id.includes(`${path.sep}react-dom${path.sep}`) ||
            id.includes(`${path.sep}react${path.sep}`) ||
            id.includes('react-router-dom')
          ) {
            return 'vendor'
          }
          if (id.includes('motion')) return 'motion'
          if (id.includes('lucide-react')) return 'icons'
          return undefined
        },
      },
    },
  },
})