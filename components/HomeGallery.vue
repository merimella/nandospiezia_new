<template>
  <div class="container-fluid photo-gallery p-0">
    <div class="row g-0">
      <div
        class="col-6 col-md-6 col-lg-4"
        v-for="(image, index) in images"
        :key="index"
        :ref="'image-' + index"
      >
        <img :src="image" class="img-fluid w-100" />
      </div>

      <!-- Immagine extra visibile solo su dispositivi mobili -->
      <div class="col-6 d-block d-md-none">
        <img src="/images/home-gallery/gallery-extra.png" class="img-fluid w-100" alt="Extra Image" />
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { onMounted, nextTick } from 'vue';

export default {
  name: "PhotoGallery",
  data() {
    return {
      images: [
        "/images/home-gallery/gallery-10.png",
        "/images/home-gallery/gallery-20.png",
        "/images/home-gallery/gallery-30.png",
        "/images/home-gallery/gallery-40.png",
        "/images/home-gallery/gallery-50.png",
        "/images/home-gallery/gallery-60.png",
        "/images/home-gallery/gallery-70.png",
        "/images/home-gallery/gallery-80.png",
        "/images/home-gallery/gallery-90.png",
      ],
    };
  },
  mounted() {
    // Usa nextTick per assicurarsi che il DOM sia completamente renderizzato
    nextTick(() => {
      const allImages = this.images.map((_, index) => this.$refs[`image-${index}`][0]);

      // Verifica che tutte le immagini siano pronte
      if (allImages.every(img => img)) {
        this.animateImages(allImages);
      }
    });
  },
  methods: {
    animateImages(images) {
      // Aggiungiamo l'animazione in ingresso con immagini che entrano dal basso
      const timeline = gsap.timeline();

      timeline.set(images, {
        y: '100vh',  // Inizialmente fuori dallo schermo verso il basso
        opacity: 0,
        scale: 0.5,  // Più piccole all'inizio
      });

      timeline.to(images, {
        y: 0,         // Portiamo le immagini alla loro posizione originale
        opacity: 1,
        scale: 1,     // Dimensioni originali
        stagger: 0.2,
        duration: 1.5,
        ease: "power3.out",
      });
    }
  }
};
</script>

<style scoped>
.photo-gallery {
  background: #ffffff;
}

.img-fluid {
  width: 100%;
  height: 700px;
  object-fit: cover;
  display: block;
}
</style>
