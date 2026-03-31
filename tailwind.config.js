/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#517c63', // Softer, muted sage green
        'soft-white': '#f5f7f3', // Creamy, warm paper-white to reduce glare
        'slate-gray': '#55645e',   // Soft grey with a hint of green
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
