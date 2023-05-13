/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "ff-",
  theme: {
    extend: {
      colors: {
        background: "#252836",
        "alt-background": "#1F2129",
        primary: "#FF612B",
        hr: "#64646C",
        gunmental: "#2F3142",
        "base-100": "#B1B1B5",
      },
      fontSize: {
        "2.5xl": "1.625rem",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("autoprefixer"), require("@tailwindcss/forms")],
}
