/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#f8be67",
          200: "#f7b553",
          300: "#f6ad3e",
          400: "#f5a42a",
          DEFAULT: "#F49D1A",
          600: "#e9910b",
          700: "#d5840a",
          800: "#c17709",
          900: "#ac6b08",
        },
        cyan: {
          DEFAULT: "#00F5FF",
        },
        red: {
          DEFAULT: "#ED3D29",
          600: "#e47a6a",
        },
        "bg-primary": {
          100: "#242424F8",
          200: "#35383f",
          400: "#292c31",
          DEFAULT: "#242424",
        },
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        robotoCon: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
