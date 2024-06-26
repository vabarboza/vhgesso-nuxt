export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vhgesso-nuxt',
    htmlAttrs: {
      lang: 'en',
      class: "theme-light"
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        type: "text/css",
        href: 'https://cdn.jsdelivr.net/npm/bulma@1.0.1/css/bulma.min.css'
      },
      {
        rel: 'stylesheet',
        type: "text/css",
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'animate.css/animate.min.css',
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
