/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation:{
        'slow-bounce': 'bounce 2s ease-out infinite' 
      },
      keyframes:{
        bounce:{
          '0%, 100%':{transform: 'translateY(0)'},
          '50%':{transform: 'translateY(40px)'},
        }
      }
    },
  },
  plugins: [],
}