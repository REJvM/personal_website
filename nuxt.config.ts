// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2025-01-16",
  css: ["~/assets/styles/app.scss"],
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
      apiKey: process.env.API_KEY,
    },
  },
  modules: ["dayjs-nuxt", "@pinia/nuxt"],
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
});
