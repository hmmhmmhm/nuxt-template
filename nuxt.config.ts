import type { NuxtConfig } from '@nuxt/types'
import path from 'path'

const nuxtConfig: NuxtConfig | {
    build: {
        postcss: any
    }
} = {
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
    build: {
        postcss: {
            plugins: {
                'tailwindcss': path.resolve('./client/config/tailwind.config.js'),
            }
        }
    },
    loading: { color: '#3B8070' },
    css: ['~/assets/css/main.css'],
    buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],
    modules: ['@nuxtjs/axios'],
    axios: {},
    plugins: ['~/plugins/composition-api'],
    tailwindcss: {
        configPath: '~/config/tailwind.config.js',
        cssPath: '~/assets/css/tailwind.css',
        exposeConfig: false
    }
}
export default nuxtConfig