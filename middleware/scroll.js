// middleware/scroll.js
export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
      const savedPosition = window.sessionStorage.getItem('scroll-position');
      if (savedPosition) {
        window.scrollTo({
          top: parseInt(savedPosition, 10),
          behavior: 'smooth',
        });
      }
  
      // Salva la posizione corrente prima di navigare via
      window.addEventListener('beforeunload', () => {
        window.sessionStorage.setItem('scroll-position', window.scrollY);
      });
    }
  });
  