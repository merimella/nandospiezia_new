export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  pages: true,
  ssr: false, // Modalità SPA (no SSR)

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

  // Aggiungi questa sezione per configurare le variabili d'ambiente
  runtimeConfig: {
    // Variabili private che saranno accessibili solo lato server
    strapiBearerKey: process.env.STRAPI_BEARER_KEY || '',

    // Variabili pubbliche, accessibili sia lato server che client
    public: {
      strapiUrl: process.env.STRAPI_API_URL || 'http://localhost:1337',
    }
  },
});
