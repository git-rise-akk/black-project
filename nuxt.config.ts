export default defineNuxtConfig({
  devtools: {enabled: false},

  app: {
      head: {
        title: "BLACK PROJECT",
        htmlAttrs: {
            lang: "ru",
        },
        charset: "utf-8",
        meta: [
          {name: 'format-detection', content: 'telephone=no'},
          {name: 'msapplication-TileColor', content: '#da532c'},
          {name: 'theme-color', content: "#ffffff"},
          {name: 'apple-mobile-web-app-title', content: "BP"},
        ],
  
        link: [
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '48x48',
            href: '/icons/favicon-48x48.png',
          },
          {
            rel: 'icon',
            type: 'image/svg+xml',
            href: '/icons/favicon.svg',
          },
          {
            rel: 'shortcut icon',
            href: '/icons/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/icons/apple-touch-icon.png',
          },
          {rel: 'manifest', href: '/site.webmanifest'},
        ],
  
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

  plugins: [
    '@/plugins/directives.js',
    { src: '@/plugins/registerGsap.js', mode: 'client'}
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