import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  
    base: './', // important for Netlify


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