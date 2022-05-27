import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    terserOptions: {
      compress: {
        keep_infinity: true,
        drop_console: false,
      },
    },
    minify: "terser",
    brotliSize: false,
    chunkSizeWarningLimit: 2000,
  },
});
