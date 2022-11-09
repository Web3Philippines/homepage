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
        about: "url('/assets/home/about_section.jpg')",
        directory: "url('/assets/home/directory_section.jpg')",
        event: "url('/assets/home/event_section.jpg')",
        hero: "url('/assets/home/hero.jpg')",
        ripple: "url('/assets/home/circles.svg')",
      },
      colors: {
        transparent: "rgba(0,0,0,0)",
        dim: "rgba(0,0,0,0.5)",
        "purple-heart": "#7B3FE4",
        "blue-ribbon": "#016EEA",
        "black-pearl": "#080524",
        letters: "#1C1C1E",
        "about-gradient": "#D3BCFA",
        "light-letter": "#8E8E8F",
        "directory-white": "#F6F1FF",
      },
      fontFamily: {
        "futura-regular": ["FuturaRegular"],
        "futura-bold": ["FuturaBold"],
        "futura-black": ["FuturaBlack"],
      },
    },
  },
  plugins: [],
};
