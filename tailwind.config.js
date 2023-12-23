/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "color-pera": "#64748b",
        "color-heading": "#334155",

      },
      fontSize: {
        "size-heading": ""
      }
    },
  },
  plugins: [],
};

