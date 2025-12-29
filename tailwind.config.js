/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-orange': '#FF5733',
        'neon-cyan': '#00FFFF',
        'dark-navy': '#0A192F',
        'charcoal-gray': '#1D2A3A',
        'light-white': 'rgba(255, 255, 255, 0.8)',
      },
      fontFamily: {
        sans: ['Poppins', 'Noto Sans JP', 'sans-serif'],
      },
      boxShadow: {
        'neon-orange': '0 0 5px #FF5733, 0 0 10px #FF5733, 0 0 15px #FF5733, 0 0 20px #FF5733',
        'neon-cyan': '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF',
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
