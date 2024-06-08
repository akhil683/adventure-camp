/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      bebasNeue: ["Bebas Neue", "sans-serif"],
    },
    dropShadow: {
      red: "0 10px 35px rgb(232 118 44)",
    },
    extend: {
      animation: {
        image: "spin 5s ease-in-out infinite",
      },
      keyframes: {
        spin: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(20px)" },
        },
      },
    },
  },
  plugins: [],
};
