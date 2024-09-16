<template>
  <div>
    <Navbar /> <!-- Navbar fissa -->
    
    <!-- Condizione per mostrare il loader -->
    <Loader v-if="isLoading" />

    <!-- Contenuto dinamico delle pagine con transizione -->
    <transition
      mode="in-out"
      @before-leave="beforeLeave"
      @leave="leave"
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <NuxtPage v-if="!isLoading" /> <!-- Mostra la pagina solo dopo il caricamento -->
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import Navbar from '~/components/Navbar.vue';
import Loader from '~/components/Loader.vue'; // Importa il componente con il nome corretto

// Stato per controllare il caricamento
const isLoading = ref(true);

// Simula il completamento del caricamento dopo un certo tempo (puoi rimuovere o modificare questo comportamento in base alle tue esigenze)
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false; // Nasconde il loader dopo 3 secondi
  }, 3000);
});

// Funzioni di transizione per animare l'ingresso e l'uscita delle pagine
const beforeEnter = (el) => {
  gsap.set(el, {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 2,
    x: '100vw',
    opacity: 1,
  });
};

const enter = (el, done) => {
  const tl = gsap.timeline({
    onComplete: done,
    delay: 0.5,
  });
  tl.to(el, {
    x: '0vw',
    duration: 1.5,
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
    delay: 0.5,
  });
  tl.to(el, {
    x: '-20vw',
    opacity: 0.5,
    duration: 2,
    ease: 'power2.out',
  });
};
</script>

<style scoped>
/* Prevent horizontal scrolling without affecting vertical scroll */
html, body {
  overflow-x: hidden;
  overflow-y: auto;
}

/* Hide scrollbars during page transitions on various devices */
::-webkit-scrollbar {
  display: none; /* Hide scrollbar in Webkit browsers */
}

html {
  scrollbar-width: none; /* Hide scrollbar in Firefox */
}
</style>
