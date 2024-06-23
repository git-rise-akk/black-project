// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Black Project",
      htmlAttrs: {
          lang: "ru",
      },
      charset: "utf-8",
    },
  },

  modules: [
    'nuxt-icons',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxtjs/device',
  ],
  eslint: {
      checker: true,
  },
  css: ["@/assets/css/main.scss"],
  image: {
      quality: 80,
      format: ["webp"],
  },
})
