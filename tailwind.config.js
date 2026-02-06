/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#508066",
        bage: "#F3EEE7",
        secondary: "#c5a059", // Gold
        "off-bage": "#f9f7f2", // More subtle cream
        cream: "#f4f1ea", // For sections
        gold: "#c5a059",
        dark: "#051512", // Deep rich green-black for luxury feel
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
