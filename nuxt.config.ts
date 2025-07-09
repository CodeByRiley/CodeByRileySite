// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-06-11',
  modules: ['@nuxt/ui', 'nuxt-vercel-analytics', '@nuxt/content'],

  content: {
    
  },

  ssr: true,

  nitro: {
    // Remove prerender for dynamic deployment
  },

  app: {
    head: {
      title: "CodeByRiley",
      meta: [
        { name: 'description', content: 'CodeByRiley is a 20-year-old self-taught software developer from Australia.' },
        { name: 'keywords', content: 'Riley, Software Developer, Code, CodeByRiley' },
        { name: 'author', content: 'RileyDev' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' }
      ]
    },
    pageTransition: {
      name: 'fade',
      mode: 'out-in'
    },

  },

  devtools: {
    enabled: true
  }
});
