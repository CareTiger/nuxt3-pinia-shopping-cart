import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        link: [
            {
                href: "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined",
                rel: "stylesheet",
            }          
            ],
        },    
    modules: [
        '@nuxtjs/tailwindcss', '@vueuse/nuxt',
    ],
    buildModules: ['@pinia/nuxt'],
})
