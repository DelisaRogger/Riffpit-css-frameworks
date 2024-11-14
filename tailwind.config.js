/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    boxShadow: true
  },
  content: ["./feed/**/*.{html,js}","./profile/**/*.{html,js}","./index.html","!./node_modules/**/*"],
  theme: {
    extend: {},
  },
  plugins: [],
}

