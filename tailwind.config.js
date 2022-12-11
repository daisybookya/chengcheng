/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        '"Helvetica Neue"',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
      ],
      serif: [
        'ui-serif',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif',
      ],
      display: ['"Bodoni Moda"', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
