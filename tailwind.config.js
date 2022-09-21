/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        'screen-navbar-player': 'calc(120vh - 6rem - 6rem)'
      }
    },
  },
  plugins: [],
};
