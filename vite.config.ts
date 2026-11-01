import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  ssr: { noExternal: true },
  build: {
    // Vites Standard lässt ältere iPhones aus, dort blieben die Inhalte versteckt
    target: ["es2020", "chrome87", "edge88", "firefox78", "safari14"],
  },
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
});
