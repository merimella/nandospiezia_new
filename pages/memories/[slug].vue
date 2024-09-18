<template>
  <div class="smooth-wrapper">
    <div class="smooth-content">
      <!-- Messaggio di caricamento se i dati non sono pronti -->
      <div v-if="!postData">
        <p>Loading...</p>
      </div>

      <!-- Sezione Cover -->
      <div v-else>
        <section class="cover" ref="coverSection" :style="{ backgroundImage: postData?.attributes?.coverImageUrl ? `url(${postData.attributes.coverImageUrl})` : 'none' }">
          <div class="text-container">
            <h1>{{ postData?.attributes?.title || 'Title not available' }}</h1>
            <h2>{{ postData?.attributes?.subtitle || 'Subtitle not available' }}</h2>
          </div>
        </section>

        <!-- Sezione Descrizione -->
        <section class="section" ref="contentSection">
          <div class="text-container">
            <h3>{{ postData?.attributes?.heading || 'Heading not available' }}</h3>
            <p>{{ postData?.attributes?.description || 'Description not available' }}</p>
          </div>
        </section>

        <!-- Sezione Galleria -->
        <section class="gallerySection full-page" v-if="postData?.attributes?.gallery && postData.attributes.gallery.data.length">
          <div class="gallery-container">
            <div class="masonry-gallery">
              <div
                v-for="(image, index) in postData.attributes.gallery.data"
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
    </div>
  </div>
</template>

<script lang="js" setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollSmoother } from 'gsap/all';
import axios from 'axios';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const route = useRoute();
const postData = ref(null); // Dati del post
const coverSection = ref(null);
const contentSection = ref(null);

// Chiamata API per ottenere il post basato sullo slug
const fetchPostData = async (slug) => {
  try {
    const response = await axios.get(`http://localhost:1337/api/posts?filters[slug][$eq]=${slug}&populate=*`, {
      headers: {
        Authorization: `Bearer 98788d4aa362cc31587b9600529fd6314d219985bae8b0d15838b3e114f6611d6c718ea819da564042737ca93cc7c3434a3f840c05a26be22a4794bd73bd1fb3f0e764bef85d1ccc10cd780f6b280c98fe81e427eb62b44d2f47eb6cdce8c64c81501b7005ff128ef23545e8e10e7747359ccda6028a13777e406eaf3180b219` // Inserisci qui la tua Bearer key
      }
    });
    postData.value = response.data.data[0]; // Assumiamo che il primo elemento sia quello corretto
  } catch (error) {
    console.error('Error fetching post data:', error);
  }
};

onMounted(async () => {
  const slug = route.params.slug; // Ottiene lo slug dalla route

  if (!slug) {
    console.error('No slug found in route params');
    return;
  }

  await fetchPostData(slug); // Ottiene il post basato sullo slug

  // Inizializza GSAP ScrollSmoother
  const smoother = ScrollSmoother.create({
    wrapper: '.smooth-wrapper',
    content: '.smooth-content',
    smooth: 1.5,
  });

  // Aggiungi ScrollTrigger per le sezioni
  ScrollTrigger.create({
    trigger: coverSection.value,
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  });

  ScrollTrigger.create({
    trigger: contentSection.value,
    start: 'top center',
    end: 'bottom center',
    scrub: true,
  });

  // Aggiungi animazioni per la galleria
  gsap.utils.toArray('.masonry-item').forEach((image) => {
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
/* Stili per l'intera pagina */
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

.section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Stili per la Cover */
.cover {
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.text-container {
  max-width: 900px;
  text-align: center;
  padding: 20px;
}

/* Stili per la Galleria */
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
}

.masonry-gallery {
  display: flex;
  flex-wrap: wrap;
}

.masonry-item {
  flex: 1 1 30%;
  margin: 5px;
}

img {
  width: 100%;
  height: auto;
}
</style>
