import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tagger from "@dhiwise/component-tagger";

export default defineConfig({

  build: {
    chunkSizeWarningLimit: 2000,
  },
  
  plugins: [tsconfigPaths(), react(), tagger()],
  base: '/Glora-Beauty-Lounge/',
});