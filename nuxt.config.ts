// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxt/ui', 'nuxt-vercel-analytics'],
  ssr: false,
  app: {
    head:{
      title: "CodeByRiley",
      meta: [
<<<<<<< HEAD
        { name: 'description', content: 'CodeByRiley is a website for Riley, a 20-year-old self-taught software developer from Australia.' },
        { name: 'keywords', content: 'Riley, Software Developer,' },
=======
        { name: 'description', content: 'CodeByRiley is a 20-year-old self-taught software developer from Australia.' },
        { name: 'keywords', content: 'Riley, Software Developer, Code, CodeByRiley' },
>>>>>>> 3b20d094a8f030e9aadaeca1cc180cd0b9ea0d83
        { name: 'author', content: 'RileyDev' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' }
      ]
    },
    pageTransition: {
        name: 'fade',
        mode: 'out-in'
    }
  },
  
});
