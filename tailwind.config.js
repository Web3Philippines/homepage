/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./assets/images/hero.jpg')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "bg-gray": "#F1F4F6",
        "bg-black": "#0E0E16",
        "bg-black-2": "#181822",
        "bg-purple": "#7B3FE4",
        "text-gray": "#9292BF",
        "text-gray-2": "#525355",
      },
    },
  },
  plugins: [require("daisyui")],
};
