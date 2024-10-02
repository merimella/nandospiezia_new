<template>
  <transition name="fade">
    <div v-if="isMenuOpen" class="menu-overlay">
      <!-- Navbar all'interno del menu overlay -->
      <nav :class="['navbar', { 'menu-open': isMenuOpen }]">
        <!-- Logo in alto a sinistra -->
        <div class="logo" :class="{ 'menu-open-logo': isMenuOpen }">
          <div class="logo-container">
            <NuxtLink to="/" @click="closeMenu" class="logo">
              <img src="/public/images/logo-nav.svg" alt="Logo" class="logo-img" />
            </NuxtLink>
          </div>
        </div>
        <button @click="closeMenu" class="ns-hamb-container">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L18 18M18.7695 1.00195L1.38478 18.3848" stroke="black" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </nav>

      <!-- Menu principale -->
      <div class="menu-links-container">
        <NuxtLink to="/" @click="closeMenu" class="menu-item split-links">HOME</NuxtLink>
        <NuxtLink to="/memories-gallery" @click="closeMenu" class="menu-item split-links">MEMORIES</NuxtLink>
        <NuxtLink to="/stories-gallery" @click="closeMenu" class="menu-item split-links">STORIES</NuxtLink>
        <NuxtLink to="/about" @click="closeMenu" class="menu-item split-links">ABOUT</NuxtLink>
        <NuxtLink to="/faq" @click="closeMenu" class="menu-item split-links">FAQ</NuxtLink>
        <NuxtLink to="/contacts" @click="closeMenu" class="menu-item split-links">CONTACTS</NuxtLink>
      </div>

      <!-- Sezioni extra -->
      <div class="menu-privacy-links">
        <div class="privacy-policy">PRIVACY POLICY</div>
        <div class="commercial-copyright">COMMERCIAL COPYRIGHT</div>
        <div class="creative-project">CREATIVE PROJECT</div>
      </div>
      <div class="menu-social-links">
        <img class="facebook-negative" src="/images/facebook-negative0.svg" />
        <img class="twitter-negative" src="/images/twitter-negative0.svg" />
        <img class="group" src="/images/group0.svg" />
      </div>
    </div>
  </transition>
</template>

<script>
import { gsap } from 'gsap';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export default {
  props: ['isMenuOpen'],
  watch: {
    isMenuOpen(newVal) {
      if (newVal) {
        this.$nextTick(() => {
          this.animateMenu();
          // Rimuovi il mix-blend-mode quando il menu è aperto
          document.querySelector('.navbar').style.mixBlendMode = 'initial';
        });
      } else {
        // Riapplica il mix-blend-mode quando il menu è chiuso
        document.querySelector('.navbar').style.mixBlendMode = 'difference';
      }
    }
  },
  methods: {
    animateMenu() {
      const splitLinks = new SplitText(".split-links", { type: "lines", linesClass: "lineChild" });
      new SplitText(".split-links", { type: "lines", linesClass: "lineParent" });

      const tl = gsap.timeline({ repeat: 0, repeatDelay: 0.5, yoyo: true });

      tl.from(splitLinks.lines, {
        y: 80,
        duration: 0.35,
        stagger: 0.10
      });
    },
    closeMenu() {
      this.$emit('close-menu');
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  overflow: hidden;
  mix-blend-mode: difference; /* Applica mix-blend-mode solo quando il menu è chiuso */
}

.logo-container {
  display: flex;
  align-items: center; /* Centra verticalmente il logo */
  padding-left: 30px;
}

.logo {
  text-align: left;
  text-decoration: none;
}
.split-links{
  overflow: hidden;
}

.logo-img {
  height: 30px; /* Ridimensiona il logo per essere proporzionato all'hamburger */
  width: auto;
}

/* Bottone hamburger */
.ns-hamb-container {
  background-color: transparent;
  padding-right: 30px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center; /* Centra l'hamburger verticalmente con il logo */
}

.ns-hamb-container svg {
  width: auto;
}

.ns-hamb-container svg path {
  stroke: white;
}

/* Stili per il menu overlay */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white; /* Sfondo solido per il menu aperto */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Menu principale */
.menu-links-container {
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: center;
  justify-content: center;
  width: 430px;
  position: absolute;
  left: calc(50% - 215px);
  top: calc(50% - 323px);
}

.menu-item {
  color: #000000;
  text-align: left;
  font-family: "SilkSerif", sans-serif;
  font-size: 60px;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  transform-origin: 0 0;
}

/* Sezioni extra */
.menu-privacy-links {
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: flex-end;
  justify-content: flex-start;
  position: absolute;
  left: 79px;
  bottom: 58px;
}

.menu-social-links {
  display: flex;
  flex-direction: row;
  gap: 21px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: calc(50% - -222.92px);
}

.menu-social-links img {
  width: 15%;
}

@media (max-width: 768px) {
  .menu-item {
   font-size:50px!important;
  }
}

</style>
