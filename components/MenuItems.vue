<template>
  <transition name="fade">
    <div v-if="isMenuOpen" class="menu-overlay">
     <div class="desktop-1">
    <div class="frame-6">
      <div class="logo">LOGO</div>
    </div>
    <div class="frame-1">
          <NuxtLink to="/" @click="closeMenu" class="menu-item">HOME</NuxtLink>
          <NuxtLink to="/memories" @click="closeMenu" class="menu-item">MEMORIES</NuxtLink>
          <NuxtLink to="/stories" @click="closeMenu" class="menu-item">STORIES</NuxtLink>
          <NuxtLink to="/about" @click="closeMenu" class="menu-item">ABOUT</NuxtLink>
          <NuxtLink to="/faq" @click="closeMenu" class="menu-item">FAQ</NuxtLink>
          <NuxtLink to="/contacts" @click="closeMenu" class="menu-item">CONTACTS</NuxtLink>
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
  mounted() {
   
  },
  methods: {
    closeMenu() {
      this.$emit('close-menu');
    }
  }
};
</script>

<style scoped>
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
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: 69px;
  top: 44px;
}
.logo {
  color: #000000;
  text-align: left;
  font-family: "SilkSerif-Regular", sans-serif;
  font-size: 30px;
  font-weight: 400;
  position: relative;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(1, 1);
}
.frame-8 {
  display: flex;
  flex-direction: column;
  gap: 8.04px;
  align-items: flex-end;
  justify-content: flex-start;
  height: auto;
  position: absolute;
  right: 25px;
  top: 53px;
  transform: translate(-41px, 0px);
  overflow: visible;
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
