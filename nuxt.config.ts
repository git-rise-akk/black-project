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
    },
    modules: [
        '@pinia/nuxt',
        'nuxt-icons',
        '@nuxt/image',
        '@nuxtjs/device',
    ],
    css: ["@/assets/css/main.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData:
                        '@import "@/assets/css/mixins.scss";',
                },
            },
        },
    },
    image: {
        quality: 80,
        format: ["webp"],
    },
    devServer: {
        host: '0.0.0.0',
        port: 80,
    },
})
