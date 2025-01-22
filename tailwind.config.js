/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'yellow-mellow' : '#EFE3C2',
        'green-jumbotron' : '#123524',
        'green-border' : '#63E868',
        'green-backg' : '#C2F7C5',
        'green-card' : '#93E296',
        'green-latte' : '#638C6D',
      },
      fontFamily: {
        albert: ["Albert Sans", "sans-serif"],
        poppins: ["Poppins"],
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        slideRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slideLeft: "slideLeft 0.3s ease-in",
        slideRight: "slideRight 0.3s ease-in",
      },
    },
  },
  plugins: [],
}

