<template>
  <nav :class="['navbar', { 'navbar-sticky': isSticky }]">
    <div class="menu-links" v-if="!isMobile">
      <NuxtLink to="/" active-class="active" @click="closeMenu" class="menu-link">Home</NuxtLink>
      <NuxtLink to="/memories-gallery" active-class="active" @click="closeMenu" class="menu-link">Memories</NuxtLink>
      <NuxtLink to="/stories-gallery" active-class="active" @click="closeMenu" class="menu-link">Stories</NuxtLink>
      <NuxtLink to="/about" active-class="active" @click="closeMenu" class="menu-link">About</NuxtLink>
      <NuxtLink to="/faq" active-class="active" @click="closeMenu" class="menu-link">FAQ</NuxtLink>
      <NuxtLink to="/contacts" active-class="active" @click="closeMenu" class="menu-link">Contacts</NuxtLink>
    </div>

    <!-- Bottone "MORE" su desktop e hamburger su mobile -->
    <button v-if="isMobile" @click="toggleMenu" class="menu-toggle hamburger-button">
      <div class="hamburger-container">
        <svg width="28" height="14" viewBox="0 0 28 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1H27M1 7H27M1 13H27" stroke="white" stroke-width="2" stroke-linecap="round" />
        </svg>
      </div>
    </button>

    <!-- Componente MenuItems -->
    <MenuItems :isMenuOpen="isMenuOpen" @close-menu="closeMenu" />
  </nav>
</template>


<script>
import MenuItems from '~/components/MenuItems.vue';

export default {
  data() {
    return {
      isSticky: false, // Traccia se la navbar deve diventare sticky
      isMobile: false, // Traccia lo stato responsive
      isMenuOpen: false, // Gestisce l'apertura del menu su mobile
    };
  },
  components: {
    MenuItems
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.checkMobile);
    this.checkMobile(); // Verifica lo stato mobile all'inizio
    this.handleScroll(); // Verifica la posizione della navbar al caricamento iniziale
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.checkMobile);
  },
  watch: {
    // Aggiungiamo un watcher per monitorare i cambi di route
    '$route'() {
      this.$nextTick(() => {
        this.handleScroll(); // Richiama handleScroll per ricalcolare la posizione della navbar
      });
    }
  },
  methods: {
    handleScroll() {
      const content = document.querySelector('#content');

      // Rende la navbar sticky se lo scroll raggiunge il contenuto
      if (window.scrollY >= content.offsetTop) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
    checkMobile() {
      this.isMobile = window.innerWidth <= 768; // Imposta il menu mobile per schermi piccoli

      const navbar = document.querySelector('.navbar');
      
      // Rimuove il mix-blend-mode quando non è più mobile
      if (!this.isMobile) {
        navbar.style.mixBlendMode = 'normal';
      } else {
        navbar.style.mixBlendMode = 'difference';
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;

      const navbar = document.querySelector('.navbar');
      if (this.isMenuOpen) {
        navbar.classList.add('active');
      } else {
        navbar.classList.remove('active');
      }
    },
    closeMenu() {
      this.isMenuOpen = false;
      const navbar = document.querySelector('.navbar');
      navbar.classList.remove('active');
    }
  }
};
</script>



<style scoped>
/* Navbar inizialmente posizionata sopra il contenuto */
.navbar {
  position: absolute;
  top: 100vh; /* Posiziona la navbar subito sotto l'header fisso */
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white; /* Sfondo bianco sempre visibile */
  padding-left: 30px;
  padding-right: 30px;
  transition: background-color 0.3s ease-in-out, opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  opacity: 1;
}

/* Navbar sticky quando si scorre oltre il contenuto */
.navbar-sticky {
  position: fixed;
  top: 0; /* Navbar fissata in alto */
  left: 0;
  right: 0;
  background-color: white;
  opacity: 1;
  padding-left: 30px;
  padding-right: 30px;
  z-index: 1000;
  padding-top: 10px;
  padding-bottom: 10px;
}

/* Menu links */
.menu-links {
  display: flex;
  justify-content: center;
  flex-grow: 1;
  gap: 35px;
}

.menu-link {
  text-decoration: none;
  color: black;
  font-size: 18px;
  text-transform: uppercase;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  border-bottom: 2px solid transparent; /* Imposta un bordo trasparente per un effetto underline */
}

.menu-link:hover {
  color: grey;
}

/* Link attivo con underline */
.menu-link.active {
  border-bottom: 2px solid black; /* Sottolinea il link attivo */
  color: black; /* Mantiene il colore nero sul link attivo */
}

/* Bottone per il menu su mobile */
.menu-toggle {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-right: 30px;
}

.menu-toggle svg {
  width: 28px;
  height: 28px;
}

/* Navbar con transizione quasi immediata */
@media (max-width: 768px) {
  .menu-links {
    display: none; /* Nasconde le voci di menu su mobile */
  }

  .navbar {
    background-color: transparent; /* Rimuove il background su mobile */
    opacity: 0.9; /* Riduce l'opacità per renderlo meno visibile inizialmente */
    transition: opacity 0.6s ease, transform 0.5s ease; /* Transizioni morbide solo per opacity e transform */
    transition-delay: 0.2s; /* Aggiunge un leggero ritardo alla transizione */
    mix-blend-mode: difference; /* Effetto blend mode */
  }

  /* Aggiungi una classe attiva per il background netto */
  .navbar.active {
    background-color: rgba(0, 0, 0, 0.95); /* Background scuro e netto */
    opacity: 1; /* Aumenta l'opacità */
    mix-blend-mode: normal; /* Rimuove il blend mode per un contrasto maggiore */
    transition: background-color 0s, opacity 0.3s ease; /* Rimuove la transizione per lo sfondo */
  }

  .menu-toggle {
    margin-left: auto;
    padding-right: 0px; /* Allinea correttamente l'hamburger */
    padding-bottom: 20px;
  }

  /* Aggiungiamo un effetto al passaggio del mouse sul menu toggle */
  .menu-toggle:hover {
    opacity: 1; /* Rendi più visibile quando l'utente passa sopra */
    transition: opacity 0.3s ease-in-out; /* Applica una transizione più morbida */
  }
}

</style>
