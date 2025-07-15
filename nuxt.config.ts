// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    './layers/blog',
    './layers/events',
    './layers/news',
    './layers/page',
  ],
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
