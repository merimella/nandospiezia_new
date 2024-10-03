<template>
  <div>
    <!-- Mostra il loader quando isLoading è true -->
    <transition name="loader-fade" mode="out-in">
      <LogoLoader v-if="isLoading" />
    </transition>

    <!-- Mostra il contenuto della pagina solo quando isLoading è false e il loader è completamente nascosto -->
    <transition :css="false" mode="out-in" @enter="enterAnimation" @leave="leaveAnimation">
      <NuxtPage v-if="!isLoading && loaderHidden" />
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import LogoLoader from '~/components/LogoLoader.vue'; // Importa il componente LogoLoader

// Variabile reattiva per gestire lo stato di caricamento
const isLoading = ref(true);
const loaderHidden = ref(false); // Variabile per confermare che il loader è completamente nascosto

// Funzione per gestire il completamento del caricamento del sito
const handleLoadingComplete = () => {
  gsap.to('.logo-loader-wrapper', {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      isLoading.value = false; // Rendi false solo dopo che il loader è sparito
      loaderHidden.value = true; // Conferma che il loader è nascosto
    }
  });
};

// Utilizza onMounted per aspettare il caricamento completo delle risorse
onMounted(() => {
  // Usa window.onload per aspettare il caricamento di tutte le risorse (immagini, CSS, JS)
  window.onload = () => {
    handleLoadingComplete(); // Nasconde il loader solo dopo che tutto è caricato
  };
});

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
