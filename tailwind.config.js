/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-900': '#060C0B',
        'dark-800': '#1B2524',
        'dark-secondary-700': '#1E2429',
        'dark-secondary-800': '#111818',
        'dark-secondary-300': '#798B8B',
        'dark-tertiary-700': '#2B3332',
        'dark-tertiary-800': '#131817',
      }
    },
  },
  plugins: [],
}