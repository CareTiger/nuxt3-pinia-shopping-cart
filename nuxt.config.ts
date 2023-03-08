export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt Pinia",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Nuxt Pinia" },
      ],
      link: [
        {
          href: "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined",
          rel: "stylesheet",
        },
      ],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
  ],
});
