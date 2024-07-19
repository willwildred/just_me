/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        sphere: "sphere 7s infinite",
        stars: "stars 4s infinite",
      },

      keyframes: {
        sphere: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(40px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(50px, 40px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },

        stars: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "50%": {
            transform: "translate(1200px, -20px) scale()",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          }
        }
      }
    },
  },
  plugins: [],
}

