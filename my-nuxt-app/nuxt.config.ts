// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  nitro: {
    preset: 'static'
  },

  modules: ['@unocss/nuxt'],
  app: {
    head: {
      title: 'CS Portfolio | Your Name',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Final year Computer Science student showcasing projects and technical skills' }
      ],
      link: [
        { 
          rel: 'preconnect', 
          href: 'https://fonts.googleapis.com' 
        },
        { 
          rel: 'preconnect', 
          href: 'https://fonts.gstatic.com',
          crossorigin: '' 
        },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&family=Playfair+Display:wght@400;700&display=swap' 
        }
      ]
    }
  }
})
