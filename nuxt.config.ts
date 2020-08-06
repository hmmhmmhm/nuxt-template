import type { NuxtConfig } from '@nuxt/types'
import path from 'path'

// * Hide ExperimentalWarning
process.removeAllListeners('warning')

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
    buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss', '@nuxtjs/pwa'],
    modules: ['@nuxtjs/axios'],
    axios: {},
    plugins: ['~/plugins/composition-api'],
    tailwindcss: {
        configPath: '~/config/tailwind.config.js',
        cssPath: '~/assets/css/tailwind.css',
        exposeConfig: false
    },
    pwa: {
        workbox: {
            runtimeCaching: [
                // * handler 유형

                // * Cache First   : 네트워크 요청과 캐싱 중 항상 캐시를 먼저 접근하는 방식
                // * Cache Only    : 캐싱 파일만 확인하고 없으면 에러를 뱉는 방식
                // * Network First : 항상 캐싱보다는 네트워크 요청을 먼저 진행하는 방식
                // * Network Only  : 해당 파일에 대해서는 캐싱 파일의 유무와 관계 없이 항상 네트워크 요청만 하는 방식

                // * StaleWhileRevalidate : 캐싱을 먼저 시도하고 없으면 네트워크 요청을 진행하는 방식.
                // *   프로필 이미지와 같이 자주 업데이트 되면서 최신 데이터가 아니어도 되는 데이터 적용하면 좋음
                {
                    urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
                    handler: 'CacheFirst',
                    strategyOptions: {
                        cacheName: 'images',
                        cacheExpiration: {
                            maxEntries: 10,
                            maxAgeSeconds: 300
                        }
                    }
                },
            ]
        }
    }
}
export default nuxtConfig