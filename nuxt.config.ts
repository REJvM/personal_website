// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2025-01-16",
  css: ["~/assets/styles/app.scss"],
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
      apiKey: process.env.NUXT_ENV_API_KEY,
      cmsPath: process.env.CMS_PATH,
      picturePath: process.env.PICTURE_PATH,
    },
  },
  modules: [
    "dayjs-nuxt",
    "@pinia/nuxt",
    "@vueuse/motion/nuxt",
    "@nuxthub/core",
  ],
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
