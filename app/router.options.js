export default {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        // Mantiene la posizione salvata
        return savedPosition;
      } else {
        // Altrimenti scorre alla posizione in alto
        return { top: 0 };
      }
    },
  };
  