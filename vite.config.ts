import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    keycloakify({
      accountThemeImplementation: "none",
      environmentVariables: [
        { name: "THEME_FAQ_PAGE", default: "https://www.google.com" }
      ]
    })
  ]
});
