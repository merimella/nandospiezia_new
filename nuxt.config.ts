export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: [
    'bootstrap/dist/css/bootstrap.min.css'
  ],

  app: {
    head: {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
          integrity: 'sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p',
          crossorigin: 'anonymous'
        },
        // Aggiungi GSAP locale
        {
          src: '/gsap-premium/gsap.min.js', // Usa il percorso statico
        },
        // Aggiungi SplitText locale
        {
          src: '/gsap-premium/SplitText.min.js', // Usa il percorso statico
        }
      ]
    }
  }
});
