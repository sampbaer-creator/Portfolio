/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#100f0b',
        secondary: '#23190f',
        accent: '#d69a3d',
        ember: '#a0471d',
        moss: '#3d4a29',
        parchment: '#f3dfb4',
      }
    },
  },
  plugins: [],
}
