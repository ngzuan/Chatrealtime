/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        softGray: "#313338",
        text1: "#e0e1e5",
        primaryBlack: "#1e1f22",
        primaryBlack1: "hsl(223,21%,7%)",
        veryDarkBlue: "hsl(229,31%,21%)",
      },
    },
  },
  plugins: [],
};
