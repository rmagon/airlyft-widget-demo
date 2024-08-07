// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '@/assets/css/main.css',
  ],
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    configPath: 'tailwind.config.js',
  },
  app: {
    head: {
      title: 'AirLyft Widget Demo',
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-VJVD35W6VB',
          async: true,
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-VJVD35W6VB');
          `,
          type: 'text/javascript',
        },
      ],
    }
  }
})
