/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-1750%)' },
        },
        'scroll-mobile': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-3000%)' }, 
        },
      },
      animation: {
        scroll: 'scroll 150s linear infinite',
        'scroll-fast': 'scroll 80s linear infinite',
        'scroll-mobile': 'scroll-mobile 80s linear infinite',
      },
    },
  },
  plugins: [],
};
