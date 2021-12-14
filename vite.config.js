import { defineConfig } from 'vite'
import {createVuePlugin as vue} from 'vite-plugin-vue2'
import path from 'path'

export default defineConfig({
//https://vitejs.dev/config/export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})