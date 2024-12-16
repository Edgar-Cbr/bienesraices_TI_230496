/** @type {import('tailwindcss').Config} */
export default {
  content: ['./views/**/*.pug'], // Asegúrate de que las rutas estén bien configuradas
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        redd: '#D65A18', // Naranja principal
        black: '#000000',
        white: '#ffffff',
        celadon: '#FCE8D5', // Naranja claro con mezcla de blanco
        cgr: '#FDF6F6', // Blanco con un ligero tono rosado
        emerald: '#A14012', // Naranja oscuro
        pigmentgreen: '#733A1A', // Naranja profundo menos intenso

        // Intensidades de Celadon
        'celadon-50': '#FEEAD9',
        'celadon-100': '#FCE8D5',
        'celadon-200': '#FAD2B4',
        'celadon-300': '#F7BC92',
        'celadon-400': '#F5A671',

        // Intensidades de Emerald
        'emerald-100': '#A14012',
        'emerald-200': '#8F3910',
        'emerald-300': '#7D320E',
        'emerald-400': '#6B2B0C',

        // Intensidades de Pigment Green
        'pigmentgreen-100': '#733A1A',
        'pigmentgreen-200': '#502400',
        'pigmentgreen-300': '#472000',
      },
      backgroundImage: {
        // Degradado de Celadon a Emerald
        'celadon-to-emerald': 'linear-gradient(to right, #FCE8D5, #A14012)',

        // Degradado de Emerald a Pigment Green
        'emerald-to-pigmentgreen': 'linear-gradient(to right, #A14012, #733A1A)',

        // Degradado de Celadon a Pigment Green
        'celadon-to-pigmentgreen': 'linear-gradient(to right, #FCE8D5, #733A1A)',

        // Degradado de tres colores
        'three-color-gradient': 'linear-gradient(to right, #FCE8D5, #A14012, #733A1A)',
      },
    },
  },
  plugins: [],
};
