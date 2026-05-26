/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        banner: ['Luckiest Guy', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        content: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}

