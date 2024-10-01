<template>
  <div id="content" class="page-container">
    <!-- Navbar con hamburger e menu mobile -->
    <nav class="navbar">
      <button @click="toggleMenu" class="menu-toggle hamburger-button">
        <div class="hamburger-container">
          <svg width="28" height="14" viewBox="0 0 28 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H27M1 7H27M1 13H27" stroke="white" stroke-width="2" stroke-linecap="round" />
          </svg>
        </div>
      </button>

      <!-- Componente MenuItems con lo stesso effetto di `multiply` -->
      <MenuItems :isMenuOpen="isMenuOpen" @close-menu="closeMenu" />
    </nav>

    <!-- Contenuto StoriesGallery -->
    <StoriesGallery />
    <FooterForm />
    <Footer />
  </div>
</template>

<script>
import MenuItems from '~/components/MenuItems.vue';
import StoriesGallery from '~/components/StoriesGallery.vue';

export default {
  components: {
    MenuItems,
    StoriesGallery
  },
  data() {
    return {
      isMenuOpen: false, // Gestisce l'apertura del menu mobile
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      const navbar = document.querySelector('.navbar');

      // Applica lo stesso effetto "multiply" per il background
      if (this.isMenuOpen) {
        navbar.classList.add('active');
        navbar.style.mixBlendMode = 'difference';
      } else {
        navbar.classList.remove('active');
        navbar.style.mixBlendMode = 'normal';
      }
    },
    closeMenu() {
      this.isMenuOpen = false;
      const navbar = document.querySelector('.navbar');
      navbar.classList.remove('active');
      navbar.style.mixBlendMode = 'normal';
    }
  }
};
</script>

<style scoped>
.page-container{
  background-color: white;
}

/* Stile della navbar con hamburger */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 20px;
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
  mix-blend-mode: difference; /* Effetto blend mode */
  

}

/* Bottone hamburger */
.menu-toggle {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.menu-toggle svg {
  width: 28px;
  height: 28px;
}

/* Navbar attiva con mix-blend mode */
.navbar.active {
  background-color: rgba(0, 0, 0, 0.95); /* Scuro quando attivo */
  mix-blend-mode: difference; /* Effetto di differenza */
}
</style>
