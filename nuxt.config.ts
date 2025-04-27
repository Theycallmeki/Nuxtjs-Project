// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01', // Ensures compatibility with this date version of Nuxt
  devtools: {
    enabled: true // Enables Nuxt DevTools for development
  },
  postcss: {
    plugins: {
      'postcss-nested': {}, // Enables nested CSS (like Sass)
      'postcss-custom-media': {} // Enables custom media queries
    }
  }
})
