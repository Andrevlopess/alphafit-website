/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'archivo': ["Archivo Narrow", "sans-serif"]
      },
      colors: {
        "zinc-901" : "#1A1A1D"
      },
      boxShadow: {
        "underline-dark" : "0 2px 0px 0px #fff",
        "underline-light" : "0 2px 0px 0px #18181b"
      },
    },
  },
  plugins: [],
}
