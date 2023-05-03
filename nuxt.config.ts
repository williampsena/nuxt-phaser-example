export default defineNuxtConfig({
    ssr: false,
    app: {
        head: {
            title: 'nuxt-phaser-example',
        },
    },
    css: ['~/assets/css/main.css'],
    plugins: [{ src: 'node_modules/nuxtjs-phaser', mode: 'client' }],
})
