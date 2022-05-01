module.exports = {

  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'spin-slow': {
          '0%' : { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'spin-slow': 'spin-slow 10s linear infinite',

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
