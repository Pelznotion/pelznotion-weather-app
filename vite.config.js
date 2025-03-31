import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "import.meta.env.VITE_WEATHER_API_KEY": JSON.stringify(
      process.env.VITE_WEATHER_API_KEY
    ),
  },
});
