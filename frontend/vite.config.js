// vite.config.js
import { defineConfig } from 'vitest/config'   // ⬅️ เปลี่ยนจาก 'vite' เป็น 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',                     // ให้เทส React รันได้
    css: false,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'html'],     // สร้าง lcov.info ที่ frontend/coverage/lcov.info
      reportsDirectory: 'coverage'
    }
  }
})
