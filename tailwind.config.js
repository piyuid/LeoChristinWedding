/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Greatvibes: ["Great Vibes", "cursive"],
        Alice: ["Alice", "serif"],
        Satisfy: ["Satisfy", "cursive"],
        Tangerine: ["Tangerine", "cursive"],
        Oscript: ["Oleo Script Swash Caps", "cursive"],
      },
    },
  },
  plugins: [],
}