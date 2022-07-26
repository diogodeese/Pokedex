/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Oxanium, cursive",
      },
      fontSize: {
        pokemonNameDynamic: "clamp(8px, 5vw, 25px)",
        inputDynamic: "clamp(8px, 5vw, 1rem)",
      },
      boxShadow: {
        input: "-3px 4px 0 #888, -5px 7px 0 #333",
        navigate: "-2px 3px 0 #222, -4px 6px 0 #000",
        pressed: "inset -4px 4px 0 #222",
      },
    },
  },
  plugins: [],
};
