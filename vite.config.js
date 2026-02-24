import { defineConfig } from 'vite'
import fs from 'fs';
import { hostname } from 'os';
import path from 'path';
import { version } from './package.json';
import vue from '@vitejs/plugin-vue'

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

export default defineConfig(async ({ mode }) => {
  if (mode === 'development') {
    if (!fs.existsSync(path.join(__dirname, 'localhost.pem')) || !fs.existsSync(path.join(__dirname, 'localhost-key.pem'))) {
      const mkcert = await import('mkcert');
      // eslint-disable-next-line one-var
      const CA = await mkcert.createCA({
      organization: hostname(),
      countryCode: "CA",
      state: "Quebec",
      locality: "Québec",
      validity: 365
      }),
      CERT = await mkcert.createCert({
        ca: { key: CA.key, cert: CA.cert },
        domains: ["localhost"],
        validity: 365
      });
      fs.writeFileSync(path.join(__dirname, 'localhost.pem'), CERT.cert);
      fs.writeFileSync(path.join(__dirname, 'localhost-key.pem'), CERT.key);
    }
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
          key: fs.readFileSync(path.join(__dirname, 'localhost-key.pem')),
          cert: fs.readFileSync(path.join(__dirname, 'localhost.pem'))
          }
        }
      };
      return { ...LOCAL_CONFIG, base: '/Website-CDJVUL/' }
  }
  return { ...BASE_CONFIG, base: '/Website-CDJVUL/' };
  
})