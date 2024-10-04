// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app:{
    head:{
      charset: "UTF-16",
      title: "Elon's Musk",
      viewport: "width=device-width, initial-scale=1"
    }
  },
  modules: [
    "@nuxtjs/tailwindcss"
  ],



  runtimeConfig: {
    public:{
      wpUri: process.env.WP_URI,  
    }
  },

  
})
