import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    server: {
        hmr: {
          host: '0.0.0.0',
          port: 8002,
        },
      },
    plugins: [
        react(),
        laravel({
            input: ["resources/css/app.css", "resources/js/app.tsx"],
            refresh: true,
        }),
    ],
});
