/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        medina: {
          red: "#EF4553",
          blue: "#00ADBF",
          "blue-dark:": "#0E6973",
          black: "#261E15"
        }
      }
    },
  },
  plugins: [],
}
