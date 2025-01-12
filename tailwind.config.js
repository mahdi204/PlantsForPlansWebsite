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
    },
  },
  plugins: [],
}

