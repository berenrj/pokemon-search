import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/pokemon-search/'
})

// Update if requiring
// -path aliases
// -proxy rules
// -custom base path
// -plugins
// -build tweaks