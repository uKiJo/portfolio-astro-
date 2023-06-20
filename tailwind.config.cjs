/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "300px",
        bp: "500px",
      },
      colors: {
        primary: "#000a12",
        lprimary: "#11202B",
        secondary: "#00FF84",
        dark_text: "#D9D9D9",
      },
      backgroundImage: {
        decore1: "url('/decore-top-right.svg'), url('/decore-bot-left.svg')",
        "decore-light":
          "url('/decore-top-light.svg'), url('/decore-bot-light.svg')",
      },
      backgroundSize: {
        "40%": "40%",
        "80%": "80%",
        "100%": "100%",
      },
      backgroundPosition: {
        pos: "top right, bottom left",
      },
    },
  },
  plugins: [],
};
