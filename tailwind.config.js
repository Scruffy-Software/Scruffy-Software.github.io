module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      orange: "#f60",
      dark: {
        15: 'rgba(0,0,0,0.15)',
        75: 'rgba(0,0,0,0.75)'
      },
      white: '#fff'
    },
    fontFamily: {
      logo: 'Londrina Solid, cursive;',
      body: 'Poppins, sans-serif;'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
