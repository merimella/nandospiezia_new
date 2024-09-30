export default defineNuxtConfig({
  compatibilityDate: '2024-09-28', // La data proposta dal terminale

  devtools: { enabled: true },
  pages: true, // Mantieni l'opzione per il routing automatico
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

  runtimeConfig: {
    public: {
      strapiApiUrl: process.env.STRAPI_API_URL, // Prende il valore da .env
      strapiBearerKey: process.env.STRAPI_BEARER_KEY // Prende il valore da .env
    }
  }
});
