/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        montereyDark: "url('/bg.jpg')",
        montereyLight: "url('/bg-monterey-light.jpg')"
      }
    },
  },
  plugins: [],
}
