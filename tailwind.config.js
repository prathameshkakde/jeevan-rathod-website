/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        medical: {
          50: '#ecfeff',
          100: '#cffafe',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2, 132, 199, 0.1)'
      }
    }
  },
  plugins: []
};
