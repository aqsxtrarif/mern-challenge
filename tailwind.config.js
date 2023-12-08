/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'silver-white': '#F8F8F8',
        'coral-red' : '#F94B3F',
      },
      fontFamily: {
        poppinsRegular: ['poppins-regular', 'sans-serif'],
        poppinsSemibold: ['poppins-semibold', 'sans-serif']
      }
    },
  },
  plugins: [],
}