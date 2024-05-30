/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF385C',
      },
      backgroundImage: {
        'hero-pattern': "url('https://bookmyjunk.com/src/img/banner.jpg')",
        'bgsec': "url('https://bookmyjunk.com/src/img/bgsec.png')",
        'hazards': "url('https://bookmyjunk.com/src/img/bgshape.png')",
        'book': "url('https://bookmyjunk.com/src/img/bgshape1.png')",
      },
    },
  },
  plugins: [],
};