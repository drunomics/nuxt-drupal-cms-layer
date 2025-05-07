import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  extends: [
    '..',
  ],

  modules: [
    'nuxtjs-drupal-ce',
    '@nuxt/eslint',
  ],

  eslint: {
    config: {
      // Use the generated ESLint config for lint root project as well
      rootDir: fileURLToPath(new URL('..', import.meta.url))
    }
  },

  devtools: { enabled: true },

  compatibilityDate: '2025-05-07'
})