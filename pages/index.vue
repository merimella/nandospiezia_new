<template>
  <div class="smooth-wrapper"> <!-- Smooth wrapper -->
    <div class="smooth-content"> <!-- Smooth content -->
      <Header 
        title="Nando Spiezia" 
        subtitle="PHOTOGRAPHY" 
        :images="['/images/header-slide-1.webp', '/images/header-slide-2.webp', '/images/header-slide-3.webp']" 
      />
      <HeaderContent1 />
      <HomeGallery />
      <section class="content">
        <!-- Rest of your homepage content -->
      </section>
    </div>
  </div>
</template>



<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from '~/components/Header.vue';
import HeaderContent1 from '~/components/HeaderContent1.vue';
import HomeGallery from '~/components/HomeGallery.vue';

// Registra entrambi i plugin
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

onMounted(() => {
  ScrollSmoother.create({
    wrapper: ".smooth-wrapper",  // Il wrapper che contiene tutto
    content: ".smooth-content",  // L'elemento che deve scrollare fluidamente
    smooth: 1.5,  // Velocità di scrolling
    effects: true,  // Effetti di parallasse
  });
});

</script>

<style scoped>
.content {
  margin-top: 100vh; /* Sposta il contenuto sotto l'header */
}
.smooth-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.smooth-content {
  position: relative;
  will-change: transform;
}
</style>