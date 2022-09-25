import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    server: { strictPort: true, hmr: { clientPort: 3000 } },
  },
});
