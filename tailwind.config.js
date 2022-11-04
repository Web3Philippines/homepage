/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/home/hero.jpg')",
        about: "url('/assets/home/about_section.jpg')",
      },
      colors: {
        "purple-heart": "#7B3FE4",
        "blue-ribbon": "#016EEA",
        "black-pearl": "#080524",
        letters: "#1C1C1E",
        "about-gradient": "#D3BCFA",
        "light-letter": "#8E8E8F",
        "directory-white": "#F6F1FF",
      },
      fontFamily: {
        futura: ["Futura Book"],
        "futura-bold": ["Futura Bold"],
        "futura-black": ["Futura Black"],
      },
    },
  },
  plugins: [],
};
