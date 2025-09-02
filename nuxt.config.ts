// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    './layers/blog',
    './layers/base',
    './layers/events',
    './layers/news',
    './layers/case-studies',
    './layers/page',
    './layers/person',
    './layers/project'
  ],
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
