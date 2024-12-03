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
          '100%': { transform: 'translateX(-1050%)' },
        },
        'scroll-mobile': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-2000%)' }, 
        },
      },
      animation: {
        scroll: 'scroll 150s linear infinite',
        'scroll-fast': 'scroll 80s linear infinite',
        'scroll-mobile': 'scroll-mobile 80s linear infinite',
      },
      scale: {
        115: '1.15',
        120: '1.20',
      },
      hiddenBackface: {
        '0%': { backfaceVisibility: 'hidden' },
      }
    },
  },
  plugins: [],
};
