/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./{components,src}/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Inter', 'sans-serif'],
        'roboto-slab': ['"Roboto Slab"', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}