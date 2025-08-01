import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://1fc1269360bc.ngrok-free.app', // 백엔드 주소
        changeOrigin: true,
        secure: false
      }
    }
  }
})
