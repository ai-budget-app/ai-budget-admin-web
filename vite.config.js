import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'

  return {
    plugins: [react()],
    esbuild: {
      loader: 'jsx',
      include: /src\/.*\.jsx?$/,
      exclude: []
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          '.js': 'jsx'
        }
      }
    },
    server: {
      port: 3000,
      host: true,
      open: true
    },
    build: {
      outDir: 'dist',
      sourcemap: isDev,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'redux-vendor': ['@reduxjs/toolkit', 'react-redux'],
            'utils-vendor': ['date-fns', 'jspdf', 'jspdf-autotable']
          }
        }
      }
    }
  }
})