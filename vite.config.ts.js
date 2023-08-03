var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});

// vite.config.ts
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// plugins/vue-custom-blocks-plugin.ts
import fs from "fs";
import { baseParse } from "@vue/compiler-core";
var vitePluginVue = {
  name: "preview",
  transform(code, id) {
    if (!/\/src\/views\/doc\/.*\.preview\.vue/.test(id) || !/vue&type=preview/.test(id)) {
      return;
    }
    let path2 = `.${id.match(/\/src\/views\/doc\/.*\.preview\.vue/)[0]}`;
    const file = fs.readFileSync(path2).toString();
    const parsed = baseParse(file).children.find((n) => n.tag === "preview");
    const title = parsed.children[0].content;
    const main = file.split(parsed.loc.source).join("").trim();
    return `export default function (Component) {
      Component.__sourceCode = ${JSON.stringify(main)}
      Component.__sourceCodeTitle = ${JSON.stringify(title)}
    }`.trim();
  }
};
var vue_custom_blocks_plugin_default = vitePluginVue;

// vite.config.ts
var mdPlugin = __require("vite-plugin-markdown");
var vite_config_default = defineConfig({
  base: "./",
  plugins: [
    vue(),
    mdPlugin.plugin({
      mode: ["html", "vue"]
    }),
    vue_custom_blocks_plugin_default
  ],
  resolve: {
    alias: {
      "@": path.resolve("E:\\CodeSpace\\VSCodeProjects\\Proj\\Proj-LxxpUI\\lxxp-ui", "src")
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGx1Z2lucy92dWUtY3VzdG9tLWJsb2Nrcy1wbHVnaW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5pbXBvcnQgdml0ZVBsdWdpblZ1ZSBmcm9tIFwiLi9wbHVnaW5zL3Z1ZS1jdXN0b20tYmxvY2tzLXBsdWdpblwiO1xuLy8gXHU5MDFBXHU4RkM3Y29tbW9uSlNcdTY1QjlcdTZDRDVcdTVCRkNcdTUxNjVcbmNvbnN0IG1kUGx1Z2luID0gcmVxdWlyZShcInZpdGUtcGx1Z2luLW1hcmtkb3duXCIpO1xuLy8gaW1wb3J0IG1kUGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLW1hcmtkb3duJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBiYXNlOiBcIi4vXCIsXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBtZFBsdWdpbi5wbHVnaW4oe1xuICAgICAgbW9kZTogW1wiaHRtbFwiLCBcInZ1ZVwiXSxcbiAgICB9KSxcblxuICAgIHZpdGVQbHVnaW5WdWUsXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShcIkU6XFxcXENvZGVTcGFjZVxcXFxWU0NvZGVQcm9qZWN0c1xcXFxQcm9qXFxcXFByb2otTHh4cFVJXFxcXGx4eHAtdWlcIiwgXCJzcmNcIiksXG4gICAgfSxcbiAgICBleHRlbnNpb25zOiBbXCIubWpzXCIsIFwiLmpzXCIsIFwiLnRzXCIsIFwiLmpzeFwiLCBcIi50c3hcIiwgXCIuanNvblwiLCBcIi52dWVcIl0sXG4gIH0sXG59KTtcbiIsICJpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcbmltcG9ydCB7IGJhc2VQYXJzZSB9IGZyb20gXCJAdnVlL2NvbXBpbGVyLWNvcmVcIjtcclxuY29uc3Qgdml0ZVBsdWdpblZ1ZSA9IHtcclxuICBuYW1lOiBcInByZXZpZXdcIixcclxuICB0cmFuc2Zvcm0oY29kZSwgaWQpIHtcclxuICAgIGlmIChcclxuICAgICAgIS9cXC9zcmNcXC92aWV3c1xcL2RvY1xcLy4qXFwucHJldmlld1xcLnZ1ZS8udGVzdChpZCkgfHxcclxuICAgICAgIS92dWUmdHlwZT1wcmV2aWV3Ly50ZXN0KGlkKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBwYXRoID0gYC4ke2lkLm1hdGNoKC9cXC9zcmNcXC92aWV3c1xcL2RvY1xcLy4qXFwucHJldmlld1xcLnZ1ZS8pWzBdfWA7XHJcbiAgICBjb25zdCBmaWxlID0gZnMucmVhZEZpbGVTeW5jKHBhdGgpLnRvU3RyaW5nKCk7XHJcbiAgICBjb25zdCBwYXJzZWQgPSBiYXNlUGFyc2UoZmlsZSkuY2hpbGRyZW4uZmluZCgobikgPT4gbi50YWcgPT09IFwicHJldmlld1wiKTtcclxuICAgIGNvbnN0IHRpdGxlID0gcGFyc2VkLmNoaWxkcmVuWzBdLmNvbnRlbnQ7XHJcbiAgICBjb25zdCBtYWluID0gZmlsZS5zcGxpdChwYXJzZWQubG9jLnNvdXJjZSkuam9pbihcIlwiKS50cmltKCk7XHJcblxyXG4gICAgcmV0dXJuIGBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoQ29tcG9uZW50KSB7XHJcbiAgICAgIENvbXBvbmVudC5fX3NvdXJjZUNvZGUgPSAke0pTT04uc3RyaW5naWZ5KG1haW4pfVxyXG4gICAgICBDb21wb25lbnQuX19zb3VyY2VDb2RlVGl0bGUgPSAke0pTT04uc3RyaW5naWZ5KHRpdGxlKX1cclxuICAgIH1gLnRyaW0oKTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdml0ZVBsdWdpblZ1ZTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUNEQTtBQUNBO0FBQ0EsSUFBTSxnQkFBZ0I7QUFBQSxFQUNwQixNQUFNO0FBQUEsRUFDTixVQUFVLE1BQU0sSUFBSTtBQUNsQixRQUNFLENBQUMsc0NBQXNDLEtBQUssT0FDNUMsQ0FBQyxtQkFBbUIsS0FBSyxLQUN6QjtBQUNBO0FBQUE7QUFFRixRQUFJLFFBQU8sSUFBSSxHQUFHLE1BQU0sdUNBQXVDO0FBQy9ELFVBQU0sT0FBTyxHQUFHLGFBQWEsT0FBTTtBQUNuQyxVQUFNLFNBQVMsVUFBVSxNQUFNLFNBQVMsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRO0FBQzlELFVBQU0sUUFBUSxPQUFPLFNBQVMsR0FBRztBQUNqQyxVQUFNLE9BQU8sS0FBSyxNQUFNLE9BQU8sSUFBSSxRQUFRLEtBQUssSUFBSTtBQUVwRCxXQUFPO0FBQUEsaUNBQ3NCLEtBQUssVUFBVTtBQUFBLHNDQUNWLEtBQUssVUFBVTtBQUFBLE9BQzlDO0FBQUE7QUFBQTtBQUlQLElBQU8sbUNBQVE7OztBRHBCZixJQUFNLFdBQVcsVUFBUTtBQUd6QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUDtBQUFBLElBQ0EsU0FBUyxPQUFPO0FBQUEsTUFDZCxNQUFNLENBQUMsUUFBUTtBQUFBO0FBQUEsSUFHakI7QUFBQTtBQUFBLEVBRUYsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsNkRBQTZEO0FBQUE7QUFBQSxJQUVqRixZQUFZLENBQUMsUUFBUSxPQUFPLE9BQU8sUUFBUSxRQUFRLFNBQVM7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
