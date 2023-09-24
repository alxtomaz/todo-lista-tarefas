import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

    // ...
    build: {
      // ...
      rollupOptions: {
        external: ['react-icons/Fa'],
        external: ['react-icons/Bs'],
        external: ['react-icons/Ai'],
      },
    },
})


