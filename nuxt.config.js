export default {
  target: "static",

  head: {
    title: "dreamcapture-layout-component-level",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["@/assets/scss/_variables.scss", "@/assets/scss/main.scss"],

  plugins: [],

  components: true,

  buildModules: [],

  modules: ["@nuxt/content", "@nuxtjs/cloudinary"],

  build: {},

  cloudinary: {
    cloudName: "doojtvxwn",
  },
};
