<template>
  <nav class="navbar">
    <!-- Bottone MENU/CLOSE ruotato di 90 gradi -->
    <button class="menu-button" @click="toggleMenu">
      <span v-if="!isMenuOpen" class="rotate-text">MENU</span>
      <span v-else class="rotate-text">CLOSE</span>
    </button>

    <!-- Overlay del menu -->
    <transition name="fade">
      <div v-if="isMenuOpen" class="menu-overlay">
        <ul class="menu-links">
          <li v-for="(link, index) in menuLinks" :key="index" class="animate__animated animate__fadeInUp">
            <!-- Usa @click per chiudere il menu quando si clicca -->
            <NuxtLink :to="link.url" @click="closeMenu">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      menuLinks: [
        { label: 'Memories', url: '/memories' },
        { label: 'Stories', url: '/stories' },
        { label: 'About', url: '/about' },
        { label: 'FAQ', url: '/faq' },
        { label: 'Contacts', url: '/contacts' }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  padding: 1rem;
  z-index: 1000;
}

.menu-button {
  font-size: 1.5rem;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  transform-origin: center;
  z-index: 1100;
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.menu-links {
  list-style: none;
  padding: 0;
}

.menu-links li {
  margin: 1rem 0;
}

.menu-links li a {
  color: white;
  font-size: 2rem;
  text-decoration: none;
}

.rotate-text {
  transform: rotate(90deg);
}
</style>
