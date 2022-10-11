/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
  ],

  theme: {

    screens: {
      xs: '318px',
      sm: '373px',
      md: '766px',
      lg: '1278px',
      xl: '1918px'
    },

    fontFamily: {
      // Default font
      sans: ['Peralta', 'cursive'],
      
      casual: ['Comic Neue', 'cursive'],
      cartoonish: ['MilkyCoffee', 'sans-serif']
    },
    extend: {
      colors: {
        "primary": "#f2f2f2",
        "secondary": "#0a0a0a",
        "tertiary": "#bf6947",
        "tertiary-light": "#e47e56",
        "tertiary-dark": "#7c442e",
        "cta": "#475fbf"
      }
    },
  },
  plugins: [],
}
