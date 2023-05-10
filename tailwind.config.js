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
        'inter': ["Inter", "sans-serif"]
      },
      backgroundImage:{
        'hero-banner' : "url(./src/assets/HeroBanner.png)",
        'mobile-hero-banner' : "url(./src/assets/MobileHeroBanner.png)"
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
