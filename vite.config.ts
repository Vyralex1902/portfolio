import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
  base: '/portfolio/',
  plugins: [remix({ basename: '/portfolio/', ssr:false}), tsconfigPaths()],
});
