<template>
  <transition name="fade">
    <div v-if="isMenuOpen" class="menu-overlay">
     <div class="desktop-1">
    <div class="frame-6">
      <NuxtLink to="/" @click="closeMenu" class="logo split-links">NANDO SPIEZIA <br> <span class="spazio" >PHOTOGRAPHY</span></NuxtLink> 
    </div>
    <div class="frame-1">
          <NuxtLink to="/" @click="closeMenu" class="menu-item split-links">HOME</NuxtLink>
          <NuxtLink to="/memories" @click="closeMenu" class="menu-item split-links">MEMORIES</NuxtLink>
          <NuxtLink to="/stories" @click="closeMenu" class="menu-item split-links">STORIES</NuxtLink>
          <NuxtLink to="/about" @click="closeMenu" class="menu-item split-links">ABOUT</NuxtLink>
          <NuxtLink to="/faq" @click="closeMenu" class="menu-item split-links">FAQ</NuxtLink>
          <NuxtLink to="/contacts" @click="closeMenu" class="menu-item split-links">CONTACTS</NuxtLink>
        </div>
    <div class="frame-3">
      <div class="privacy-policy">PRIVACY POLICY</div>
      <div class="commercial-copyright">COMMERCIAL COPYRIGHT</div>
      <div class="creative-project">CREATIVE PROJECT</div>
    </div>
    <div class="frame-2">
      <div class="instagram">INSTAGRAM</div>
      <div class="pinterest">PINTEREST</div>
      <div class="facebook">FACEBOOK</div>
    </div>
  </div>
    </div>
  </transition>
</template>

<script>
import { gsap } from 'gsap';
import SplitText from 'gsap/SplitText'; // Usa SplitText per dividere le parole

gsap.registerPlugin(SplitText);

export default {
  props: ['isMenuOpen'],
  watch: {
    isMenuOpen(newVal) {
      if (newVal) {
        this.$nextTick(() => {
          this.animateMenu();
        });
      }
    }
  },
  methods: {
    animateMenu() {
      // Applica SplitText ai link del menu
      const splitLinks = new SplitText(".split-links", { type: "lines", linesClass: "lineChild" });
      new SplitText(".split-links", { type: "lines", linesClass: "lineParent" });

      const tl = gsap.timeline({ repeat: 0, repeatDelay: 0.5, yoyo: true });

      // Anima i link uno per uno con stagger
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

.lineParent {
  overflow: hidden;
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.frame-6 {
  display: flex;
  flex-direction: column;
  
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: 30px;
  top: 30px;
}
.logo {
  color: #000000;
  font-size: 30px;
  font-weight: 200;
  font-family: 'SilkSerif', serif; 
  text-transform: uppercase;
  position: relative;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(1, 1);
  text-decoration: none;
}

.spazio{
  font-weight: 300;
  font-family: 'Forma DJR Text', sans-serif;
  letter-spacing: 11px;
  font-size: 15px;
  display: block;
  margin-top: -7px;
}

.frame-1 {
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

.split-links{
  overflow: hidden; /* Aggiungi overflow nascosto */
}
.menu-item {
  color: #000000;
  text-align: left;
  font-family: "SilkSerif", sans-serif;
  font-size: 60px;
  font-weight: 500;
  position: relative;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(1, 1);
  text-decoration: none;
  
}
.frame-3 {
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: flex-end;
  justify-content: flex-start;
  position: absolute;
  left: 79px;
  bottom: 58px;
}
.privacy-policy {
  color: #000000;
  text-align: left;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 13px;
  font-weight: 400;
  position: relative;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(1, 1);
}
.commercial-copyright {
  color: #000000;
  text-align: left;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 13px;
  font-weight: 400;
  position: relative;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(1, 1);
}
.creative-project {
  color: #000000;
  text-align: left;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 13px;
  font-weight: 400;
  position: relative;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(1, 1);
}
.frame-2 {
  display: flex;
  flex-direction: row;
  gap: 21px;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: calc(50% - 103px);
  top: calc(50% - -222.92px);
}
.instagram {
  color: #000000;
  text-align: left;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 10px;
  font-weight: 400;
  position: relative;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(1, 1);
}
.pinterest {
  color: #000000;
  text-align: left;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 10px;
  font-weight: 400;
  position: relative;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(1, 1);
}
.facebook {
  color: #000000;
  text-align: left;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 10px;
  font-weight: 400;
  position: relative;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(1, 1);
}
</style>
