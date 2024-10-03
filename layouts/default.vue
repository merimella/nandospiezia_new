<template>
  <div>
    <!-- Mostra il loader quando isLoading è true -->
    <transition name="loader-fade" mode="out-in">
      <LogoLoader v-if="isLoading" @loading-complete="handleLoadingComplete" />
    </transition>

    <!-- Mostra il contenuto della pagina solo quando isLoading è false -->
    <transition :css="false" mode="out-in" @enter="enterAnimation" @leave="leaveAnimation">
      <NuxtPage v-if="!isLoading" />
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { gsap } from 'gsap';
import LogoLoader from '~/components/LogoLoader.vue'; // Importa il componente LogoLoader

// Variabile reattiva per gestire lo stato di caricamento
const isLoading = ref(true);

// Funzione per gestire il completamento del caricamento
const handleLoadingComplete = () => {
  gsap.to('.logo-loader-wrapper', {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      isLoading.value = false;
    }
  });
};

// Animazione GSAP per l'entrata del contenuto
const enterAnimation = (el, done) => {
  gsap.fromTo(
    el,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      onComplete: done,
    }
  );
};

// Animazione GSAP per l'uscita del contenuto (se necessaria)
const leaveAnimation = (el, done) => {
  gsap.to(el, {
    opacity: 0,
    duration: 0.5,
    ease: 'power2.in',
    onComplete: done,
  });
};
</script>

<style scoped>
/* Stile per la transizione di dissolvenza del loader */
.loader-fade-enter-active, .loader-fade-leave-active {
  transition: opacity 1s;
}
.loader-fade-enter, .loader-fade-leave-to {
  opacity: 0;
}

/* Stile per nascondere la scrollbar */
html, body {
  overflow-x: hidden;
  overflow-y: auto;
}

::-webkit-scrollbar {
  display: none;
}

html {
  scrollbar-width: none; /* Nasconde la scrollbar su Firefox */
}
</style>
