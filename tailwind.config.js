const { JoinInnerTwoTone } = require("@mui/icons-material");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 4s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      spacing: {
        "80%": "80%",
        "70%": "70%",
      },
    },
    colors: {
      purple: {
        light: "#6752ED",
        DEFAULT: "#6752ED",
        dark: "#141C3A",
      },
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
    },
  },
  variants: {
    animation: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
};
