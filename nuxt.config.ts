// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "nuxt-icons"],
});
