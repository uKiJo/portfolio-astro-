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
    },
  },
  plugins: [],
};
