/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '1px': '1px', // Single-pixel border
        '2px': '2px', // Double-pixel border
      },
      screens: {
        '2md': '930px',
        '3xl': '1640px', // For large desktop screens
        '4xl': '1744px', // For large desktop screens
        '5xl': '2560px', // For ultra-wide screens
      }
    },
  },
  plugins: [],
}

