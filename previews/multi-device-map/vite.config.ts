import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const checkout = process.env.BAKABASE_CHECKOUT;
if (!checkout) throw new Error("Set BAKABASE_CHECKOUT to the Bakabase checkout.");
const web = path.join(checkout, "src/web");
export default defineConfig({
  cacheDir: ".vite",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.join(web, "src") }, dedupe: ["react", "react-dom", "i18next", "react-i18next"] },
  server: { host: "127.0.0.1", port: 51864, strictPort: true, open: false, fs: { allow: [web, path.dirname(fileURLToPath(import.meta.url))] } },
});
