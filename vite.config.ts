// vite.config.js (example)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // if you use React; remove if you don't

export default defineConfig({
  base: '/quiz/',           // <- CHANGE this to your repo name (trailing slash)
  plugins: [react()],
})