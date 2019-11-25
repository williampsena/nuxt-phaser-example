export default {
    env: {},
    head: {
        title: 'nuxt-phaser-example',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: 'A nuxt phaser example',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    loading: { color: '#3B8070' },
    css: ['~/assets/css/main.css'],
    build: {},
    buildModules: ['@nuxt/typescript-build'],
    modules: ['@nuxtjs/axios'],
    plugins: [
        { src: 'node_modules/nuxtjs-phaser', mode: 'client' }
    ],
    axios: {},
}
