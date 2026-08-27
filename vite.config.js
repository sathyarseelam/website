import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index:        resolve(__dirname, "index.html"),
        stills:       resolve(__dirname, "stills.html"),
        professional: resolve(__dirname, "professional.html"),
        travel:       resolve(__dirname, "travel.html"),
        food:         resolve(__dirname, "food.html"),
      },
    },
  },
});