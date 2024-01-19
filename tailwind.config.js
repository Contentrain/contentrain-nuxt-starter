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
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ config }) => {
      const states = ["", "hover", "focus", "focus-visible"];
      const properties = ["bg", "text", "border"];
      const rootColors = [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "info",
      ];
      // Leveller azaltılabilinir.. ??
      const levels = [
        "50",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
      ];

      const luiSafeList = [];

      states.forEach((state) => {
        if (state !== "focus-visible" && state !== "") {
          properties.forEach((property) => {
            rootColors.forEach((color) => {
              levels.forEach((level) => {
                luiSafeList.push(`${state}:${property}-${color}-${level}`);
              });
            });
          });
        }
        if (state === "") {
          properties.forEach((property) => {
            rootColors.forEach((color) => {
              levels.forEach((level) => {
                luiSafeList.push(`${property}-${color}-${level}`);
              });
            });
          });
        }

        if (state === "focus-visible") {
          rootColors.forEach((color) => {
            luiSafeList.push(`focus-visible:ring-${color}-500/40`);
          });
        }
        if (state === "hover" || state === "focus") {
          rootColors.forEach((color) => {
            luiSafeList.push(`${state}:bg-${color}-600/20`);
          });
          rootColors.forEach((color) => {
            luiSafeList.push(`${state}:hover:bg-${color}-400/20`);
          });
        }
      });
      luiSafeList.push("py-2");
      const allClassList = [...luiSafeList, config().safelist];
      config().safelist = [...new Set(allClassList.flat())];
    }),
  ],
};
