import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { plugin as markdown } from 'vite-plugin-markdown'
import path from 'path'

export default defineConfig({
  base: '/blog/',
  assetsInclude: ['**/*.JPG'],
  plugins: [react(), markdown({ mode: ['html'] as any })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
