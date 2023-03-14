/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    fontFamily: {
      font_headline: [
        "ABC Ginto Nord",
        "Noto Sans",
        "Helvetica Neue",
        " Helvetica",
        "Arial",
        "sans-serif",
      ],
      font_display: [
        "gg sans",
        "Noto Sans",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans - serif",
      ],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        homeColor_primary: "#404eed",
        homeColor_black: "#23272a",
        discord_blue: "#295DE7",
        discord_blurple: "#7289da",
        discord_purple: "#5865f2",
        discord_green: "#3ba55c",
        discord_severBg: "#36393f",
        discord_serversBg: "#202225",
        discord_channelsBg: "#2f3136",
        discord_severNameHoverBg: "#34373c",
        discord_channelText: "#8e9297",
        discord_hoverBg: "#4e5058",
        discord_textHover: "#e0e1e5",
        discord_box: "",
        off_white: "#f6f6f6",
      },
      height: {
        "83vh": "83vh",
      },
      borderRadius: ["hover", "focus"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
