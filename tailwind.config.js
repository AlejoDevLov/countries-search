/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {

      fontFamily: {
        "Merriweather": "'Merriweather', serif"
      },

      keyframes: {
        rotateWorld: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },

      animation: {
        rotateWorld: 'rotateWorld 60s linear infinite'
      },

      backgroundImage: {
        mundo1: 'url("./assets/mundo.jpg")',
        fondo: 'url("./assets/fondo4.jpg")',
        "fondo-btn": 'url("./assets/fondo-btn-1.jpg")',
      },

    },
  },
  plugins: [],
}

