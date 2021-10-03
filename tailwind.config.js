// const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.{html}", "./src/**/*.{vue,js,ts,html}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      tablet: "576px",
      laptop: "1200px",
      desktop: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
