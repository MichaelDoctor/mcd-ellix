import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works on GitHub Pages at /linda/
// and on a custom domain at / without changes.
export default defineConfig({
  plugins: [react()],
  base: './',
})
