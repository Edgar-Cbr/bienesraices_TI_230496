/** @type {import('tailwindcss').Config} */
export default {
  content: ['./views/**/*.pug'], // Asegúrate de que las rutas estén bien configuradas
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        redd: '#D62828',
        black: '#000000',
        white: '#FFFFFF',
        indianred: '#B4656FA8E6A1',
        cornsilk: '#FFFAE3',
        Battleshipgray: '#808782',
        Jet: '#2F2F2F',
      },
    },
  },
  plugins: [],
};
  