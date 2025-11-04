import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    theme: {
    extend: {
      colors: {
        brand: "#f00",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      spacing: {
        '72': '18rem',
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
 
})