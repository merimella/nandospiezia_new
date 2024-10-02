export default defineNuxtConfig({
  compatibilityDate: '2024-09-28',

  devtools: { enabled: true },
  pages: true, 
  ssr: false,

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@/assets/css/fonts.css',
  ],

  app: {
    head: {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
          integrity: 'sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p',
          crossorigin: 'anonymous'
        }
      ]
    }
  },
 
  build: {
    transpile: ['gsap'],
  },

  modules: [
    [
      '@nuxtjs/i18n',
      {
        locales: [
          { code: 'en', iso: 'en-US', name: 'English' },
          { code: 'it', iso: 'it-IT', name: 'Italiano' }
        ],
        defaultLocale: 'en',
        strategy: 'prefix_except_default',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          alwaysRedirect: true,
          fallbackLocale: 'en'
        }
      }
    ]
  ],

  runtimeConfig: {
    public: {
      strapiApiUrl: process.env.STRAPI_API_URL,
      strapiApiToken: process.env.STRAPI_API_TOKEN,
    }
  }
});
