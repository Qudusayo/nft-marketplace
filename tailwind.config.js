/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "rgb(8, 8, 154)",
        secondary: "rgb(4, 4, 5)",
        tetiary: "rgba(4, 4, 5, 0.15)",
        tetiaryLight: "rgba(4, 4, 5, 0.05)",
        txtLight: "#040405",
        dark: "rgb(4, 4, 5)",
      },
      fontSize: {
        "4xl": "2.5rem",
      },
      backgroundSize: {
        "105%": "105%",
        "100%": "100%",
      },
      backgroundImage: {
        'shaded-repo': "linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0) 45%), url('https://metaangelsnft.mypinata.cloud/ipfs/QmVnguCRdx6J5WC6RXBB9pTbqamh5pBFnFMAcq4V6UkTCT/7281.jpeg')"
      }
    },
  },
  plugins: [],
};
