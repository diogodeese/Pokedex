/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Oxanium, cursive",
      },
      fontSize: {
        dynamic: "clamp(8px, 5vw, 25px)",
      },
    },
  },
  plugins: [],
};
