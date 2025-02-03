import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: 'all',  // Allows all hosts for dev mode
  },
  preview: {
    allowedHosts: 'all',  // Allows all hosts for preview mode
  },
})
