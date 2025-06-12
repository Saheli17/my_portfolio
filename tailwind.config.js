// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require('tailwind-scrollbar-hide')],
// };
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // <- important for toggle
   theme: {
    extend: {
        colors:{
            lightHover:'#fcf4ff',
            darkHover:'#2a004a',
            darkTheme:'#11001F'
        },
        fontFamily:{
            Outfit:["Outfit","sans-serif"],
            Ovo:["Ovo","serif"]
        }
    },
  },
  plugins: [],
};


