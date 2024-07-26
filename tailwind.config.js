module.exports = {
    content: [
      './components/**/*.{vue,js}',
      './pages/**/*.{vue,js}',
      './nuxt.config.{js,ts}',
    ],
    plugins: [],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        }
      }
    }
  }
  