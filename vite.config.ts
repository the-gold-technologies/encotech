import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/robots.txt': {
        target: 'http://localhost:3000',
        rewrite: () => '/api/seo/robots',
      },
      '/sitemap.xml': {
        target: 'http://localhost:3000',
        rewrite: () => '/api/seo/sitemap',
      },
    },
  },
})
