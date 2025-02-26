import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Cấu hình cổng server, có thể thay đổi nếu cần
  },
  build: {
    outDir: "dist", // Đầu ra mặc định của Vite
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
