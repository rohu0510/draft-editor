import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow access from any network
    port: 5173, // Use the default Vite port
    strictPort: false, // Prevent Vite from changing the port
  },
  preview: {
    port: 4173, // Default preview mode port
    strictPort: false,
  },
});
