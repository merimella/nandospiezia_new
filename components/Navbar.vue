<template>
  <nav class="navbar">
    <!-- Logo in alto a sinistra -->
    <div class="logo" :class="{ 'menu-open-logo': isMenuOpen }">
      <div class="frame-6">
      <NuxtLink to="/" @click="closeMenu" class="logo">LOGOOVER</NuxtLink> 
    </div>
    </div>

    <!-- Bottone MENU/CLOSE ruotato di 90 gradi -->
    <button class="menu-button" @click="toggleMenu">
      <span v-if="!isMenuOpen" class="rotate-text">MENU</span>
      <img v-else class="frame-8" src="/public/close.svg" />
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

.frame-8 {
  display: flex;
  flex-direction: column;
  gap: 8.04px;
  align-items: flex-end;
  justify-content: flex-start;
  height: auto;
  position: absolute;
  right: 0px;
  top: 30px;
  transform: translate(-41px, 0px);
  overflow: visible;
}

.frame-6 {
  
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: 30px;
  top: 30px;
}

.logo {
  color: white;
  text-align: left;
  font-family: "SilkSerif-Regular", sans-serif;
  font-size: 30px;
  font-weight: 700;
  text-decoration: none;
  mix-blend-mode: difference;

}

.menu-button {
  font-size: 1.5rem;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  transform-origin: center;
  z-index: 1100;
  mix-blend-mode: difference;
}


</style>
