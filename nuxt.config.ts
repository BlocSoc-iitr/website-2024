// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@fontsource/montserrat/400.css', '@fontsource/montserrat/500.css', '@fontsource/montserrat/600.css', '@fontsource/montserrat/700.css','~/assets/css/main.css'],
  modules: ['@nuxt/ui', 'nuxt-svgo'],
  svgo: {
    defaultImport: 'component',
    autoImportPath: './assets/icons',
    svgoConfig: {
      plugins: ['prefixIds'],
    },
  },
})
