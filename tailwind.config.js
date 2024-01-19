/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./nuxt.config.{js,ts}",
    "content/**/*.md",
    "contentrain/**/*.{js,ts,md,json}",
    "node_modules/@lui-ui/lui-vue/dist/*.{js,txt}",
  ],
  theme: {
    extend: {
      colors: {
        white: colors.white,
        black: colors.black,
        primary: {
          50: "#E6EAFF",
          100: "#CDD6FE",
          200: "#9AADFE",
          300: "#6883FD",
          400: "#355AFD",
          500: "#0331FC",
          600: "#0227CA",
          700: "#021D97",
          800: "#011465",
          900: "#010A32",
        },
        secondary: colors.slate,
        success: colors.green,
        warning: colors.amber,
        danger: colors.red,
        info: {
          50: "#EEECF9",
          100: "#DDD8F3",
          200: "#BBB1E7",
          300: "#BBB1E7",
          400: "#988BDA",
          500: "#7664CE",
          600: "#543DC2",
          700: "#43319B",
          800: "#22184E",
          900: "#110C27",
        },
        heading: colors.slate[900],
        body: colors.slate[600],
        border: colors.slate[200],
        muted: colors.slate[400],
        disabled: colors.slate[300],
        label: colors.slate[500],
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
    fontFamily: {
      base: ["Inter", "sans-serif"],
      aeonik: ["Aeonik", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
