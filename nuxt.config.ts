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
                'postcss-import': {},
                tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
                'postcss-nested': {}
            }
        },
        preset: {
            stage: 1
        }
    },
    buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],
    tailwindcss: {
        configPath: '~/config/tailwind.config.js',
        cssPath: '~/assets/css/tailwind.css',
        exposeConfieg: false
    },
    modules: ['@nuxtjs/axios', 'nuxt-purgecss'],
    purgeCSS: {
        mode: 'postcss',
        enabled: (process.env.NODE_ENV === 'production')
    },
    axios: {},
    plugins: ['~/plugins/composition-api']
}
