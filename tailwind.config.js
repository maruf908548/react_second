module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff", A700_19: "#ffffff19" },
        gray: {
          50: "#f9f9f9",
          100: "#f3f4f5",
          200: "#efefef",
          600: "#767676",
          "50_01": "#f7f8f9",
          "900_01": "#02112a",
          "200_01": "#e8e9eb",
          "900_21": "#03153221",
          "900_4c": "#0315324c",
        },
        blue_gray: { 100: "#d1d5d7", 700: "#4e5b6f", "900_01": "#062451" },
        teal: { 400: "#2ab27b" },
        black: { "900_19": "#00000019" },
      },
      boxShadow: {},
      fontFamily: { opensans: "Open Sans", inter: "Inter" },
      backgroundImage: { gradient: "linear-gradient(180deg, #031532,#133250)" },
      opacity: { 0.06: 0.06, 0.03: 0.03 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
