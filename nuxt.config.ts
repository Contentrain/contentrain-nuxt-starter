// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "nuxt-icons"],
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/svg",
          sizes: "32x32",
          href: "/favicon.svg",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
});
