/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'alice': ['Alice', 'serif']
      },
      colors: {
        'neutral-2': '#23262F',
        'neutral-3': '#353945',
        'neutral-4': '#777E90',
        'neutral-7': '#F4F5F6',
        'h1-black': '#23262F',
        'primary': '#04B90B',
        'hover-primary': '#00a505',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
