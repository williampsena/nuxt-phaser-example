export default defineNuxtConfig({
    ssr: false,
    app: {
        head: {
            title: 'Nuxt App with Phaser powered by nuxtjs-phaser package',
        },
    },
    css: ['~/assets/css/main.css'],
    plugins: [{ src: 'node_modules/nuxtjs-phaser', mode: 'client' }],
})
