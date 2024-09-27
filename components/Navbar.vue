<template>
  <nav :class="['navbar', { 'navbar-visible': (isScrolled && !isIdle) || isHovered || isNearTop }]">
    <!-- Link del menu al centro (solo su desktop) -->
    <div class="menu-links" v-if="!isMobile">
      <NuxtLink to="/" @click="closeMenu" class="menu-link">Home</NuxtLink>
      <NuxtLink to="/memories-gallery" @click="closeMenu" class="menu-link">Memories</NuxtLink>
      <NuxtLink to="/stories-gallery" @click="closeMenu" class="menu-link">Stories</NuxtLink>
      <NuxtLink to="/about" @click="closeMenu" class="menu-link">About</NuxtLink>
      <NuxtLink to="/faq" @click="closeMenu" class="menu-link">FAQ</NuxtLink>
      <NuxtLink to="/contacts" @click="closeMenu" class="menu-link">Contacts</NuxtLink>
    </div>

    <!-- Bottone "MORE" su desktop e hamburger su mobile -->
    <button v-if="isMobile" @click="toggleMenu" class="menu-toggle hamburger-button">
  <svg width="28" height="14" viewBox="0 0 28 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1H27M1 7H27M1 13H27" stroke="black" stroke-width="2" stroke-linecap="round"/>
  </svg>
</button>



  </nav>

  <!-- Componente delle voci del menu, già gestito separatamente -->
  <MenuItems :isMenuOpen="isMenuOpen" @close-menu="closeMenu" />
</template>

<script>
import MenuItems from '~/components/MenuItems.vue';

export default {
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false, // Per tracciare lo stato dello scroll
      isMobile: false, // Per tracciare lo stato mobile/desktop
      isIdle: false, // Per tracciare se l'utente non sta scrollando
      isHovered: false, // Per tracciare se il mouse è sopra la navbar
      isNearTop: false, // Per tracciare se il mouse è vicino alla parte superiore dello schermo
      scrollTimeout: null // Timeout per tracciare l'inattività
    };
  },
  components: {
    MenuItems
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.checkMobile);
    window.addEventListener('mousemove', this.handleMouseMove); // Aggiungi listener per il mouse
    this.checkMobile(); // Verifica lo stato iniziale
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.checkMobile);
    window.removeEventListener('mousemove', this.handleMouseMove); // Rimuovi listener per il mouse
    clearTimeout(this.scrollTimeout); // Rimuove il timeout all'uscita
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    handleScroll() {
      const triggerHeight = document.querySelector('#content').offsetTop;

      // Mostra la navbar quando l'utente supera il triggerHeight
      this.isScrolled = window.scrollY > triggerHeight;

      // Cancella il timeout quando l'utente scrolla
      clearTimeout(this.scrollTimeout);

      // Imposta isIdle a false mentre l'utente scrolla
      this.isIdle = false;

      // Imposta un timeout per rilevare l'inattività dopo 2 secondi
      this.scrollTimeout = setTimeout(() => {
        this.isIdle = true;
      }, 2000);
    },
    checkMobile() {
      // Verifica se la larghezza dello schermo è inferiore a 768px
      this.isMobile = window.innerWidth <= 768;
    },
    onHover() {
      this.isHovered = true;
    },
    onLeave() {
      this.isHovered = false;
    },
    handleMouseMove(e) {
      // Verifica se il mouse è vicino alla parte superiore dello schermo (diciamo entro i primi 100px)
      this.isNearTop = e.clientY < 100;
    }
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between; /* Distribuisce le voci del menu e il bottone */
  align-items: center;
  width: 100%;
  height: 60px;
  overflow: hidden;
  background-color: transparent; /* Trasparente per default */
  padding-left: 30px; /* Mantieni un padding costante */
  padding-right: 30px; /* Mantieni un padding costante */
  transition: background-color 0.3s ease-in-out, opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  opacity: 0; /* Inizialmente invisibile */
  transform: translateY(-100%); /* Trasla la navbar verso l'alto quando invisibile */
}

/* Sfondo bianco per desktop */
.navbar-visible {
  background-color: white; /* Sfondo bianco visibile solo su desktop */
  opacity: 1;
  transform: translateY(0); /* Riporta la navbar alla sua posizione originale */
  padding-left: 30px; /* Assicurati che il padding rimanga lo stesso */
  padding-right: 30px; /* Assicurati che il padding rimanga lo stesso */
  
}

/* Nascondiamo lo sfondo bianco su mobile */
@media (max-width: 768px) {
  .navbar-visible {
    background-color: transparent; /* Sfondo trasparente su mobile */
  }
}

.menu-links {
  display: flex;
  justify-content: center;
  flex-grow: 1; /* Assicura che le voci di menu siano al centro */
  gap: 20px;
  padding-left: 65px;
}

.menu-link {
  text-decoration: none;
  color: black;
  font-size: 18px;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.menu-link:hover {
  color: grey;
}

/* Bottone per "MORE" su desktop e hamburger su mobile */
.menu-toggle {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-right: 30px;
  flex-grow: 0; /* Aggiunge questo per evitare che il bottone influenzi il posizionamento */
  
  
  
 
}

.menu-toggle svg {
  width: 28px;
  height: 28px;

  
}

/* Aggiungere mix-blend-mode all'hamburger su mobile */
@media (max-width: 768px) {
  .menu-links {
    display: none; /* Nasconde le voci di menu su mobile */
  }

  .menu-toggle svg {
    mix-blend-mode: difference;
  }

  .menu-toggle {
    margin-left: auto; /* Allinea l'hamburger a destra */
    padding-right: 0px; /* Rimuove padding extra a destra */
    
  }
}

</style>
