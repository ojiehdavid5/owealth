/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'myfont':["Archivo Black", "sans-serif"],
        'secondfont':["Archivo", 'sans-serif']
      }
    },
  },
  plugins: [],
}