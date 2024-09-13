<template>
  <div class="photo-scroll-wrapper">
    <div class="photo-scroll-container">
      <div class="photo" v-for="(photo, index) in photos" :key="index">
        <img :src="photo.url" :alt="'Image ' + (index + 1)" />
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "FixPhotoScrollContainer",
  data() {
    return {
      photos: [
        { url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { url: "https://images.unsplash.com/photo-1481980235850-66e47651e431?q=80&w=3776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { url: "https://plus.unsplash.com/premium_photo-1661328138795-e188aa94bf5e?q=80&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      ],
    };
  },
  mounted() {
    this.initScrollAnimations();
  },
  methods: {
    initScrollAnimations() {
      gsap.utils.toArray(".photo").forEach((photo, i) => {
        gsap.fromTo(
          photo,
          { autoAlpha: 0 }, // nascondiamo le immagini
          {
            autoAlpha: 1, // le immagini diventano visibili
            scrollTrigger: {
              trigger: photo,
              start: "top top", // inizia l'animazione all'inizio della pagina
              end: "+=100%", // fine dell'animazione
              scrub: true, // sincronizza con lo scroll
              pin: true, // fissa l'immagine durante lo scroll
              pinSpacing: false, // rimuove il margine extra
            },
          }
        );
      });
    },
  },
};
</script>

<style scoped>
.photo-scroll-wrapper {
  height: 300vh; /* Abbastanza altezza per simulare lo scroll */
  position: relative;
}

.photo-scroll-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}

.photo {
  width: 100%;
  height: 100vh; /* Ogni immagine occupa tutto lo schermo */
  position: relative;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Le immagini si adattano per coprire tutto lo schermo */
}
</style>
