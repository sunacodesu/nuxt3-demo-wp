// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'server',
  generate: {
    routes: [
      '/', // トップページ
      // 他のルートが必要であれば追加
    ]
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  app:{
    head:{
      charset: "UTF-16",
      title: "saco nuxt",
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
