module.exports = {
  mode: 'jit',
  purge: [
    './dist/**/*.html',
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Inter', 'Helvetica', 'sans-serif']
    }
  },
  variants: {},
  plugins: [],
}