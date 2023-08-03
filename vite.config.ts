import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vitePluginVue from "./plugins/vue-custom-blocks-plugin";
import Markdown from 'vite-plugin-md'

export default defineConfig({
  base: "./",
  plugins: [
    vue({
      include: [/\.vue$/,/\.md$/]
    }),
    Markdown(),
    vitePluginVue,
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
});
