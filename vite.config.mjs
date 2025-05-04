import { defineConfig } from 'vite';

export default defineConfig({
  base:
    process.env.NODE_ENV === 'production' ? '/ch-device-shop-checkout/' : './',
  server: {
    open: true,
  },
});
