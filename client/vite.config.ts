import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimizeDeps: {
    include: ["pdfjs-dist/legacy/build/pdf.worker.entry.js"], // dev-only
  },
build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("pdf.worker")) return "pdfWorker";
        },
      },
    },
  },
});
