/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
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
        dark_text: "#474C54",
        lgrey: "#2C4151",
        title: "#2E3840",
        title_dark: "#B1CAE0",
        paragraph: "#505F6B",
        paragraph_dark: "#7B8D9C",
      },
      boxShadow: {
        card: "0 32px 32px rgb(31 47 70 / 12%)",
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
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-gradient": (angle) => ({
            "background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          // values from config and defaults you wish to use most
          values: Object.assign(
            theme("bgGradientDeg", {}), // name of config key. Must be unique
            {
              10: "10deg", // bg-gradient-10
              15: "15deg",
              20: "20deg",
              25: "25deg",
              30: "30deg",
              45: "45deg",
              60: "60deg",
              90: "90deg",
              120: "120deg",
              135: "135deg",
              180: "180deg",
            }
          ),
        }
      );
    }),
  ],
};
