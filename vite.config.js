import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  ...(command === 'serve'
    ? {
        server: {
          host: '0.0.0.0',
          port: 5000,
          strictPort: true,
          proxy: {
            '/api': {
              target: 'http://localhost:3001',
              changeOrigin: true,
            },
          },
        },
      }
    : {})
}))
