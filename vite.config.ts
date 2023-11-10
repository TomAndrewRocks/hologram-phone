import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";
import { ViteMinifyPlugin } from "vite-plugin-minify";

export default defineConfig({
  plugins: [react(), ViteMinifyPlugin({})],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    rollupOptions: {
      input: {
        file1: resolve(__dirname, "index.html"),
      },
    },
  },
});
