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
        primary: '#063b2b',
        secondary: '#0f5a3f',
        accent: '#d8b65a',
        ember: '#b56a28',
        moss: '#2f7a4f',
        parchment: '#f7f0d8',
        ink: '#11130f',
        paper: '#f5f1e8',
        lime: '#b7ff4a',
        clay: '#d7c7ad',
      }
    },
  },
  plugins: [],
}
