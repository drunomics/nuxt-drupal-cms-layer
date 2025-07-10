// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    './layers/blog',
    './layers/news',
    './layers/events'
  ],
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
