/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bg: "url('./public/space.png')",
      },
      fontFamily: {
        logo: ["Alata", "sans-serif"],
        PageTitle: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
