// const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.{html}", "./src/**/*.{vue,js,ts,html}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        tablet: "576px",
        laptop: "1200px",
        desktop: "1280px",
      },
      colors: {
        orange: "#945443",
        gray: "#444647",
        lightGreen: "#d2c8bd",
      },
    },
  },
  plugins: [],
};
