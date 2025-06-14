import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "cms",
      filename: "remoteEntry.js",
      exposes: {
        "./CmsApp": "./src/main.tsx",
      },
      shared: {
        react: {
          requiredVersion: false,
          singleton: true,
          eager: true,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: false,
          eager: true,
        },
        "@suite-poc/ui-kit": {
          singleton: true,
          requiredVersion: false,
          eager: true,
        },
      },
      mode: process.env.NODE_ENV,
    }),
  ],
  server: {
    port: 5002,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
