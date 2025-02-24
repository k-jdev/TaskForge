/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customOrange: "#ff9e4f",
        customPurple: "#4b2447",
        customRed: "#d76452",
        customGray: "#0c2c39",
        customWhiteGray: "#a5b0b1",
      },
    },
  },
  plugins: [],
};
