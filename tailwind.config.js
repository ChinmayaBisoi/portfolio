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
          100: "#F49D1A11",
          200: "#F49D1A33",
          300: "#F49D1A55",
          400: "#F49D1A77",
          DEFAULT: "#F49D1A",
          100: "#F49D1A11",
          100: "#F49D1A11",
          100: "#F49D1A11",
          900: "#f59607",
        },
        "bg-primary": "#242424",
      },
    },
  },
  plugins: [],
};
