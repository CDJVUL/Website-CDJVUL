import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import { version } from './package.json';
import fs from 'fs'

const BASE_CONFIG = {
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    __APP_VERSION__: JSON.stringify(version),
  },
}

export default defineConfig(({ mode }) => {
  if (mode === 'development') {
    const LOCAL_CONFIG = {
      plugins: [vue()],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
      },
      define: {
        __APP_VERSION__: JSON.stringify(version),
      },
      server: {
      https: {
        key: fs.readFileSync('./localhost-key.pem'),
        cert: fs.readFileSync('./localhost.pem'),
      }
    }}
    return { ...LOCAL_CONFIG, base: '/Website-CDJVUL/' }
  } else {
    return { ...BASE_CONFIG, base: '/Website-CDJVUL/' };
  }
})