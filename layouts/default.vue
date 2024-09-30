<template>
  <div>
    <transition mode="out-in" @enter="enter" @leave="leave">
      <NuxtPage /> <!-- Il contenuto dinamico delle pagine -->
    </transition>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';

// Funzione enter con GSAP
const enter = (el, done) => {
  gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.2, onComplete: done });
};

// Funzione leave con GSAP
const leave = (el, done) => {
  gsap.to(el, { opacity: 0, duration: 0.2, onComplete: done });
};
</script>

<style scoped>
/* Previene lo scroll orizzontale */
html, body {
  overflow-x: hidden;
  overflow-y: auto;
}

/* Nasconde le scrollbar durante le transizioni */
::-webkit-scrollbar {
  display: none;
}

html {
  scrollbar-width: none; /* Nasconde la scrollbar in Firefox */
}
</style>
