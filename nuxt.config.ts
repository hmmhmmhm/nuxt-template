const path = require('path');

export default {
    srcDir: './client',
    env: {},
    head: {
        title: 'nuxt-template',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Nuxt.js TypeScript project',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    loading: { color: '#3B8070' },
    css: ['~/assets/css/main.css'],
    build: {
        postcss: {
            plugins: {
                'tailwindcss': path.resolve('./client/tailwind.config.js'),
            }
        }
    },
    buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],
    modules: ['@nuxtjs/axios'],
    axios: {},
    plugins: ['~/plugins/composition-api']
}
