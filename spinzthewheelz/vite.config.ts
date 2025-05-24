import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { componentTagger } from "lovable-tagger";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    // Lovable’s Dev Mode listens on 8080 and accepts any host
    host: "::",
    port: 8080
  },
  plugins: [
    react(),
    // injects the inline-editor hooks—only in dev
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  // ensure assets load correctly under any base URL
  base: "/"
}));
