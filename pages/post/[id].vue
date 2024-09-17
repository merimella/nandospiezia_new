<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error.message }}</div>
  <div v-else class="smooth-wrapper">
    <div class="smooth-content">
      <!-- Sezione copertina con animazione parallax -->
      <section ref="coverSection" class="sectionCover">
        <img 
          v-if="postData.coverImage"
          :src="postData.coverImage" 
          alt="Cover Image"
          class="cover-image"
        />
        <div v-else class="placeholder">Loading cover image...</div>
      </section>

      <!-- Sezione titolo con animazione SplitText -->
      <section ref="titleSection" class="section">
        <h1 v-if="postData.title" class="split-text">{{ postData.title }}</h1>
        <h2 v-if="postData.subtitle">{{ postData.subtitle }}</h2>
        <div v-else class="placeholder">Loading title and subtitle...</div>
      </section>

      <!-- Sezione descrizione -->
      <section ref="descriptionSection" class="section">
        <p v-if="postData.description">{{ postData.description }}</p>
        <div v-else class="placeholder">Loading description...</div>
      </section>

      <!-- Sezione galleria -->
      <section ref="gallerySection" class="section">
        <div v-if="postData.gallery.length > 0" class="gallery">
          <img v-for="(image, index) in postData.gallery" :key="index" :src="image.url" alt="Gallery Image" />
        </div>
        <div v-else class="placeholder">Loading gallery...</div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useFetch } from '#app'; // Per gestire le chiamate API
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const route = useRoute();
const postId = route.params.id;

const postData = ref(null);
const loading = ref(true);
const error = ref(null);

// Riferimenti per le sezioni
const coverSection = ref(null);
const titleSection = ref(null);
const descriptionSection = ref(null);
const gallerySection = ref(null);

onMounted(async () => {
  try {
    const { data } = await useFetch(`/api/posts/${postId}?populate=*`, {
      headers: {
        Authorization: `Bearer YOUR_TOKEN_HERE`
      }
    });
    postData.value = data.value;
    loading.value = false;

    // Inizializza ScrollTrigger e le animazioni dopo il caricamento dei dati
    const smoother = gsap.timeline();
    
    // Animazione parallax per la copertina
    gsap.to(coverSection.value, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: coverSection.value,
        scrub: true,
        start: "top bottom",
        end: "bottom top"
      }
    });

    // Animazione SplitText per il titolo
    const split = new SplitText(titleSection.value.querySelector('h1'), { type: 'lines', linesClass: 'lineChild' });
    gsap.from(split.lines, {
      y: 80,
      opacity: 0,
      duration: 0.75,
      stagger: 0.15,
      scrollTrigger: {
        trigger: titleSection.value,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Animazione di fade-in per la descrizione
    gsap.from(descriptionSection.value, {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: descriptionSection.value,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Animazione della galleria
    gsap.from(gallerySection.value.querySelectorAll('img'), {
      opacity: 0,
      y: 100,
      stagger: 0.1,
      scrollTrigger: {
        trigger: gallerySection.value,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

  } catch (err) {
    error.value = err;
    loading.value = false;
  }
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

.cover-image {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.placeholder {
  text-align: center;
  padding: 20px;
  background-color: #f3f3f3;
}
</style>
