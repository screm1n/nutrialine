import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite config tailored for React + TypeScript + Tailwind
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  }
});
