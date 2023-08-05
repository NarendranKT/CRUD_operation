/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'royal': '#647DEE',
        'mid' : '#203A41',
        'gblue': '#7F53AC'
      },
      screens: {
        'm' : '320px'
      }
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")]
}