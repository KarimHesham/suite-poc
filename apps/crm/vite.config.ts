import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "crm",
      filename: "remoteEntry.js",
      exposes: {
        "./CrmApp": "./src/main.tsx",
      },
      shared: {
        react: {
          requiredVersion: false,
          singleton: true,
          eager: true,
        },
        "react-dom": {
          requiredVersion: false,
          singleton: true,
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
    port: 5001,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  preview: {
    port: 5001,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
