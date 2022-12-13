/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors:{
        'nft-blue':'hsl(215, 51%, 70%)',
        'nft-cyan':'hsl(178, 100%, 50%)',
        'nft-main-bg-blue':'hsl(217, 54%, 11%)',
        'nft-card-bg-blue':'hsl(216, 50%, 16%)',
        'nft-line-blue':'hsl(215, 32%, 27%)',
        'nft-white':'hsl(0, 0%, 100%)',
        'nft-cyan-hover':'hsl(178, 100%, 50%, 0.5)',
      },
      fontFamily:{
        'outfit':['Outfit', 'sans-serif']
      }
    },
  },
  plugins: [],
}
