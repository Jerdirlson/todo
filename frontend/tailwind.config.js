/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary':'#A64AEE',
        'secondary':'#F69A36',
        'third':'#3D256A',
        'extra':'#1F0B44',
      }
    },

  },
  plugins: [],
}

