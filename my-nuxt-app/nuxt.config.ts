// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  nitro: {
    preset: 'static'
  },

  modules: ['@unocss/nuxt'],
  
  css: ['~/assets/css/main.css'],
  
  app: {
    head: {
      title: 'Hello! I am Hong Jun',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Final year Computer Science student showcasing projects and technical skills' }
      ]
    }
  }
})
