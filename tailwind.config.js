/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customOrange: "#ff9e4f",
        customPurple: "#4b2447",
        customRed: "#d76452",
      },
    },
  },
  plugins: [],
};
