// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'static',
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  alias: {
    "@": resolve(__dirname, "/"),
  },

  css: [
    "~/public/vendor/bootstrap/css/bootstrap.min.css",
    "~/public/vendor/bootstrap-icons/bootstrap-icons.css",
    "~/assets/main.scss",
    "~/public/css/style.css"

  ],
  app: {
    baseURL: '/',
    head: {
      script: [
        { src: "/vendor/bootstrap/js/bootstrap.bundle.min.js", type: "text/javascript", defer: true },
        { src: "/js/main.js", type: "text/javascript", defer: true  }
      ]
    }
  },

  

  modules: ['@pinia/nuxt'],

  pinia: {
    storesDirs: ["./stors/**"]
  }
})
