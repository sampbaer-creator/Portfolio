/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        display: ['Instrument Serif', 'serif'],
      },
      colors: {
        primary: '#013e37',
        secondary: '#013e37',
        accent: '#ffefb3',
        ember: '#ffefb3',
        moss: '#013e37',
        parchment: '#ffefb3',
        ink: '#013e37',
        paper: '#ffefb3',
        lime: '#ffefb3',
        clay: '#ffefb3',
      }
    },
  },
  plugins: [],
}
