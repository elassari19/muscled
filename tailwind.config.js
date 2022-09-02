/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#C40000",
        "red-10": "#C4000010",
        "red-50": "#8E0000",
        "red-90": "#6E0000",
        "bg-black-7": "#0007",
        blackLight: "#0005",
        blue: "#48BBFC",
        grayLight: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
