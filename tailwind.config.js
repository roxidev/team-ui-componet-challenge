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
        success: "#10b981",
        warning: "#ff9800",
        error: "#ff5724",
        "primary-soft": "#4f46e51a",
        "seconday-soft": "#f000b91a",
        "info-soft": "#0ea5e91a",
        "success-soft": "#10b98133",
        "warning-soft": "#ff98001a",
        "error-soft": "#ff57241a",
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
