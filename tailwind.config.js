/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        'cedar': {
          '50': '#fef7f0',
          '100': '#fdeee0',
          '200': '#fbd9c1',
          '300': '#f8be98',
          '400': '#f49a6e',
          '500': '#f17a4a',
          '600': '#e25d2e',
          '700': '#ba4824',
          '800': '#993d22',
          '900': '#7b3520',
        },
        'primary': {
          'DEFAULT': '#209D50',
          '50': '#e8f5ed',
          '100': '#c4e5d1',
          '200': '#9dd4b3',
          '300': '#76c395',
          '400': '#58b67f',
          '500': '#209D50',
          '600': '#1a8d46',
          '700': '#147a3a',
          '800': '#0e682e',
          '900': '#064a1a',
        },
      },
    },
  },
  plugins: [],
}
