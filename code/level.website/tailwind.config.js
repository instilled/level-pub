/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/comps/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      backgroundImage: {
        'os-overlay': "url('/images/os-overlay.png')"
      },
      fontFamily: {
        sanchez: ["Sanchez"],
      },
    },
  },
  plugins: [],
}
