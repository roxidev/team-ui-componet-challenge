/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        default: "#e9eef5",
        light: "",
        primary: "#4f46e5",
        seconday: "#f000b9",
        info: "#0ea5e9",

        "color-pera": "#64748b",
        "color-heading": "#334155",
      },
      fontSize: {
        "size-heading": "",
      },
    },
  },
  plugins: [],
};

