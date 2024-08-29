export default defineNuxtConfig({
  devtools: {enabled: false},

  app: {
      head: {
        title: "Black Project",
        htmlAttrs: {
            lang: "ru",
        },
        charset: "utf-8",
      },
      pageTransition: { name: 'page' }
  },

  modules: [
    '@pinia/nuxt',
    'nuxt-icons',
    '@nuxt/image',
    '@nuxtjs/device',
    '@primevue/nuxt-module',
  ],

  css: ["@/assets/css/main.scss"],

  vite: {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/css/mixins.scss";',
            },
        },
    },
  },

  image: {
      quality: 80,
      format: ["webp"],
  },

  runtimeConfig: {
      mailUser: '%MU%',
      mailPass: '%MP%',
      mailTo: '%MT%',
      botToken: '%BT%',
  },

  devServer: {
      host: '0.0.0.0',
      port: 80,
  },

  compatibilityDate: '2024-08-22',
})