// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    configPath: 'tailwind.config.js',
  },
  app: {
    head: {
      title: 'AirLyft Widget Demo',
    }
  }
})
