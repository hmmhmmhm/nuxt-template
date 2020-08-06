import type { NuxtConfig } from '@nuxt/types'
import path from 'path'

// * ExperimentalWarning 오류를 숨깁니다.
process.removeAllListeners('warning')

/**
 * 리소스의 브라우저 캐싱 시 버전명이 여기에 담깁니다.
 * 만약 중요한 리소스 파일이 업데이트 되고,
 * 브라우저에서 즉각적인 반영이 필요한 경우,
 * 여기의 버전 숫자를 올리면 모든 브라우저 캐싱이 강제 갱신됩니다.
 */
const cacheVersion = {
    /**
     * 이 버전을 바꾸면 모든 리소스 캐싱이 강제 갱신됩니다.
     */
    global: 'v1-',
    /**
     * 이 버전을 바꾸면 이미지 리소스 캐싱이 강제 갱신됩니다.
     */
    images: 'v1'
}

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
        // postcss: {
        //     plugins: {
        //         'tailwindcss': path.resolve('./client/config/tailwind.config.js'),
        //     }
        // },
        analyze: true
    },
    loading: { color: '#3B8070' },
    // css: [], //'~/assets/css/main.css'
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
        // ? Workbox 공식 설명
        // ? https://pwa.nuxtjs.org/modules/workbox.html#options

        // ? PWA-Module 원본파일 참조
        // ? https://github.com/nuxt-community/pwa-module/blob/dev/lib/workbox/defaults.js

        workbox: {
            // * 브라우저 상에서 페이지가 활성화 되있는 중에
            // * 캐싱할 리소스들의 조건들을 여기에서 정의할 수 있습니다.
            runtimeCaching: [

                // urlPattern 은 아래와 같이 주소 형식 또는 확장자도 가능합니다.
                // urlPattern: 'https://my-cdn.com/.*', // 반드시 .* 이 뒤에 붙어야 하위 경로를 모두 캐싱합니다.
                // urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

                // handler 유형 목록입니다.
                // Cache First   : 네트워크 요청과 캐싱 중 항상 캐시를 먼저 접근하는 방식 (네트워크 요청도 발생)
                // Cache Only    : 캐싱 파일만 확인하고 없으면 에러를 뱉는 방식
                // Network First : 항상 캐싱보다는 네트워크 요청을 먼저 진행하는 방식 (캐싱도 확인, 늦어지면 캐시표시)
                // Network Only  : 해당 파일에 대해서는 캐싱 파일의 유무와 관계 없이 항상 네트워크 요청만 하는 방식
                // StaleWhileRevalidate : 
                //    캐싱을 먼저 시도하고 없으면 네트워크 요청을 진행하는 방식.
                //    프로필 이미지와 같이 자주 업데이트 되면서 최신 데이터가 아니어도 되는 데이터 적용하면 좋음

                // * 이미지 캐싱 정책
                {
                    // * urlPattern 은 아래와 같이 주소 형식도 가능합니다.
                    urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
                    handler: 'CacheFirst',
                    strategyOptions: {
                        cacheName: `image${cacheVersion.global}${cacheVersion.images}`,
                        cacheExpiration: {
                            maxEntries: 500, // * 500 개 까지만 구성합니다.
                            maxAgeSeconds: 30 * (60) // * 30분 동안 유효합니다.
                        }
                    }
                },
            ]
        }
    }
}
export default nuxtConfig