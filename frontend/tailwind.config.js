/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-custom': 'inset 0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}