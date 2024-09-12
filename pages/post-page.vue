<template>
  <div class="smooth-wrapper">
    <div class="smooth-content">
      <section ref="coverSection" class="sectionCover">
        <PostCover />
      </section>
      <section ref="contentSection" class="section">
        <PostTitle />
      </section>
      <section class="section">
        <PostDescription />
      </section>
      <section class="section">
        <PostGallery />
      </section>
    </div>
  </div>
</template>

<script setup>
import PostCover from '@/components/PostCover.vue';
import PostTitle from '@/components/PostTitle.vue';
import PostDescription from '@/components/PostDescription.vue';
import PostGallery from '@/components/PostGallery.vue';

import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother'; // Importa ScrollSmoother

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const coverSection = ref(null);
const contentSection = ref(null);

onMounted(() => {
  // Inizializza ScrollSmoother
  const smoother = ScrollSmoother.create({
    wrapper: '.smooth-wrapper', // Wrapper per lo scroll liscio
    content: '.smooth-content', // Il contenuto che sarà "smooth scrolled"
    smooth: 1.5, // Livello di smoothness
  });

  // Crea animazioni specifiche con ScrollTrigger senza pinning
  ScrollTrigger.create({
    trigger: coverSection.value,
    start: "top top",
    end: "bottom top",
    onEnter: () => console.log('Entering cover section'),
    scrub: true,
    markers: true,
  });

  ScrollTrigger.create({
    trigger: contentSection.value,
    start: "top center",
    end: "bottom center",
    onEnter: () => console.log('Entering content section'),
    scrub: true,
    markers: true,
  });
});

</script>

<style scoped>
.smooth-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: white;
}

.smooth-content {
  position: relative;
  width: 100%;
}

.sectionCover{
  padding: 0;
}

.section {
  min-height: 100vh;
  padding: 20px;
}
</style>
