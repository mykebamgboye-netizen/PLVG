const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#9c27b0',
        bg: '#0f0f10',
      },
      borderRadius: {
        'lg-custom': '0.75rem',
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
