import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { plugin as markdown } from 'vite-plugin-markdown'
import type { Mode } from 'vite-plugin-markdown'
import path from 'path'

export default defineConfig({
  base: '/',
  assetsInclude: ['**/*.JPG'],
  plugins: [react({ fastRefresh: false }), markdown({ mode: ['html'] as Mode[] })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
