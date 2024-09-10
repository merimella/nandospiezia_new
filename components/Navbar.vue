<template>
  <nav class="navbar">
    <!-- Logo in alto a sinistra -->
    <div class="logo" :class="{ 'menu-open-logo': isMenuOpen }">
      <NuxtLink to="/">
        <img src="/images/logo-vector.svg" alt="Logo" />
      </NuxtLink>
    </div>

    <!-- Bottone MENU/CLOSE ruotato di 90 gradi -->
    <button class="menu-button" @click="toggleMenu">
      <span v-if="!isMenuOpen" class="rotate-text">MENU</span>
      <span v-else class="rotate-text">CLOSE</span>
    </button>

    <!-- Componente delle voci del menu -->
    <MenuItems :isMenuOpen="isMenuOpen" @close-menu="closeMenu" />
  </nav>
</template>

<script>
import MenuItems from '~/components/MenuItems.vue';

export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  components: {
    MenuItems
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
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.logo img {
  height: 50px;
  width: auto;
}

.menu-open-logo img {
  filter: invert(1); /* Cambia il logo a bianco quando il menu è aperto */
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

.rotate-text {
  transform: rotate(90deg);
}
</style>
