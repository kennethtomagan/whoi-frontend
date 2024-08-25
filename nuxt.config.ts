export default defineNuxtConfig({

  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
})