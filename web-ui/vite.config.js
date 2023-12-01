import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  /*
  server: {
    proxy: {
      '/exported/': 'http://localhost:1880/',
      '/imported/': 'http://localhost:1880/',
      '/status/': 'http://localhost:1880/',
      '/meta/': 'http://localhost:1880/',
      '/data/': 'http://localhost:1880/',
      '/all/': 'http://localhost:1880/'
    }
  },
  */
  plugins: [
    vue(),
  ],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
