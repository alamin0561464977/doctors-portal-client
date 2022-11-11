/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  themes: [
    {
      mytheme: {
        primary: "#0FCFEC",
        secondary: "#19D3AE",
        accent: "#3A4256",
        neutral: "#3d4451",
        "base-100": "#ffffff",
      },
    },
    "dark",
    "cupcake",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}