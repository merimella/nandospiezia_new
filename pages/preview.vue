<template>
  <div v-for="post in posts" :key="post.id">
    <section class="gallerySection full-page" v-if="post.attributes.gallery && post.attributes.gallery.data.length">
      <div class="gallery-container">
        <div class="masonry-gallery">
          <div
            v-for="(image, index) in post.attributes.gallery.data"
            :key="image.id"
            class="masonry-item"
            :data-index="index"
          >
            <img :src="`http://localhost:1337${image.attributes.url}`" class="img-fluid" alt="Gallery Image" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="js" setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { useAsyncData } from 'nuxt/app';

const { data } = await useAsyncData('posts', () => $fetch('http://localhost:1337/api/posts?populate=*', {
  headers: {
    Authorization: `Bearer 98788d4aa362cc31587b9600529fd6314d219985bae8b0d15838b3e114f6611d6c718ea819da564042737ca93cc7c3434a3f840c05a26be22a4794bd73bd1fb3f0e764bef85d1ccc10cd780f6b280c98fe81e427eb62b44d2f47eb6cdce8c64c81501b7005ff128ef23545e8e10e7747359ccda6028a13777e406eaf3180b219`
  }
}));

const posts = data.value?.data || [];

onMounted(() => {
  gsap.utils.toArray('.masonry-item').forEach((image, index) => {
    gsap.from(image, {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: image,
        start: "top 80%",
        toggleActions: "play none none none",
        stagger: {
          each: 0.15,
          from: "start",
        },
        markers: false,
      },
    });
  });
});
</script>

<style scoped>
.full-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  background-color: white;
  padding: 20px 0;
}

.gallery-container {
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
}

.masonry-gallery {
  column-count: 3; /* Imposta 3 colonne per il layout */
  column-gap: 15px; /* Spaziatura tra le colonne */
}

.masonry-item {
  break-inside: avoid; /* Evita la rottura degli elementi tra le colonne */
  margin-bottom: 15px; /* Spazio tra le immagini verticalmente */
}

.masonry-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}
</style>
