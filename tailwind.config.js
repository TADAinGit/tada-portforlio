/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "jersey-sharp": ["JerseySharp", "ui-monospace"],
        pacifico: ["Pacifico", "ui-monospace"],
        "mplus-code": ["MPlusCode", "ui-monospace"],
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        "fade-in": "fade-in 200ms ease-in-out",
      },
    },
  },
  plugins: [],
};
