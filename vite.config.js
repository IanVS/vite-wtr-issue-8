/* eslint-disable import/no-default-export */

import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import nodePolyfills from "rollup-plugin-polyfill-node";

const IS_TESTING = process.env.NODE_ENV === "test";

export default defineConfig({
  plugins: [reactRefresh(), nodePolyfills()],
  cacheDir: "node_modules/.cache/vite",
  mode: IS_TESTING ? "test" : undefined,
  logLevel: "silent",
  build: {
    outDir: "build"
  }
});
