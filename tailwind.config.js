/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': 'rgba(8, 15, 40, .5)',
      },
    },
  },
  variants: {},
  plugins: [],
}

