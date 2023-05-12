import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // to point to correct path for gh-pages
  base: 'sendbird-chatgpt-sample-react',
})
