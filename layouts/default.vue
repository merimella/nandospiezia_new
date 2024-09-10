<template>
  <div>
    <Navbar /> <!-- Navbar fissa -->
    <transition
      mode="out-in"
      @before-leave="beforeLeave"
      @leave="leave"
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <NuxtPage /> <!-- Il contenuto dinamico delle pagine -->
    </transition>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import Navbar from '~/components/Navbar.vue';

// Funzioni di transizione
const beforeEnter = (el) => {
  gsap.set(el, {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 2,
    x: '100vw',
    opacity: 0,
  });
};

const enter = (el, done) => {
  const tl = gsap.timeline({
    onComplete: done,
  });
  tl.to(el, {
    x: '0vw',
    opacity: 1,
    duration: 2,
    ease: 'power2.out',
  });
};

const beforeLeave = (el) => {
  gsap.set(el, {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  });
};

const leave = (el, done) => {
  const tl = gsap.timeline({
    onComplete: done,
  });
  tl.to(el, {
    x: '-100vw',
    opacity: 0,
    duration: 2,
    ease: 'power2.out',
  });
};
</script>
