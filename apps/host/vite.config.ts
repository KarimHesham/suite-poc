/// <reference types="node" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const getRemoteUrl = (app: string) => {
  const appToPortMap = new Map<string, number>([
    ["crm", 5001],
    ["cms", 5002],
  ]);

  const port = appToPortMap.get(app);

  const domain = `http://localhost:${port}`;

  const domainPostfix = "/assets";

  return `${domain}${domainPostfix}/remoteEntry.js`;
};

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        crm: getRemoteUrl("crm"),
        cms: getRemoteUrl("cms"),
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: false,
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
    port: 5000,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  preview: {
    port: 5100,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
