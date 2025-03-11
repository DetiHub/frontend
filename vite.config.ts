import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), react()],
  base: '/frontend/', // Ensure the trailing slash is included
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});