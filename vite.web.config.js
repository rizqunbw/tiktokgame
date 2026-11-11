import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
export default defineConfig({build:{rollupOptions:{input:{index:fileURLToPath(new URL("./demo.html",import.meta.url))}}}});
