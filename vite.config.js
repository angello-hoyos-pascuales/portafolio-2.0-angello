import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portafolio-2.0-angello/',
  css: {
    postcss: './postcss.config.js',
  },
})