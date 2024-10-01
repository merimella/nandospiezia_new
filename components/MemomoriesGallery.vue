<template>
  <div class="gallery-section">
    <!-- Titolo e sottotitolo iniziali -->
    <div class="row py-5 text-center mx-auto content-wrapper">
      <div class="col">
        <h2 class="h2 split-text">Unforgettable</h2>
        <h1 class="h1 split-text">YOUR BEST MEMORIES</h1>
      </div>
    </div>

    <!-- Primo paragrafo -->
    <div class="paragraph-section text-center mb-5">
      <p>{{ paragraph }}</p>
    </div>

    <!-- Prima galleria -->
    <div class="row justify-content-center py-3 mx-auto content-wrapper mb-5">
      <div class="col-12 d-flex flex-wrap justify-content-center">
        <img v-for="(image, index) in firstGallery" :key="index" class="img-fluid gallery-item fade-in zoom-in" :src="image.url || '/images/default.webp'" />
      </div>
    </div>

    <!-- Heading e sottotitolo dall'API -->
    <div class="row py-5 text-center mx-auto content-wrapper mb-5">
      <div class="col">
        <h2 class="h2 split-text">{{ heading }}</h2>
        <h1 class="h1 split-text">{{ title }}</h1>
      </div>
    </div>

    <!-- Seconda galleria con layout modificato e paragrafo -->
    <div class="frame-29">
      <p class="paragraph-section">
        {{ paragraph2 }}
      </p>
      <!-- Immagini della seconda galleria -->
      <img v-if="secondGallery.length > 0" class="img-fluid img-one fade-in" :src="secondGallery[0].url || '/images/default.webp'" />
      <img v-if="secondGallery.length > 1" class="img-fluid img-two fade-in" :src="secondGallery[1].url || '/images/default.webp'" />
      <img v-if="secondGallery.length > 2" class="img-fluid img-three fade-in" :src="secondGallery[2].url || '/images/default.webp'" />
    </div>

    <!-- Full gallery -->
    <div v-if="fullGallery.length" class="gallery-container mb-5">
      <div class="masonry-gallery">
        <div v-for="(image, index) in fullGallery" :key="index" class="masonry-item zoom-in" :data-index="index">
          <img :src="image.url" class="img-fluid" alt="Gallery Image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRuntimeConfig } from '#app'; // Importa useRuntimeConfig per le variabili di ambiente

gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      title: '',
      heading: '',
      paragraph: '',
      paragraph2: '',
      firstGallery: [],
      secondGallery: [],
      fullGallery: [],
    };
  },
  async mounted() {
    try {
      const config = useRuntimeConfig(); // Ottieni le variabili di ambiente
      const apiUrl = config.public.strapiApiUrl;
      const bearerKey = config.public.strapiBearerKey;

      // Chiamata API per recuperare i dati da Strapi
      const response = await fetch(`${apiUrl}/api/memoriesgalleries?populate=*`, {
        headers: {
          Authorization: `Bearer ${bearerKey}`, // Usa la chiave Bearer dalle variabili di ambiente
        },
      });

      const data = await response.json();
      const attributes = data.data[0]?.attributes;

      // Popola i dati restituiti dall'API
      this.title = attributes?.title || 'Default Title';
      this.heading = attributes?.heading || 'Default Heading';
      this.paragraph = attributes?.paragraph || '';
      this.paragraph2 = attributes?.paragraph2 || '';

      // Popola la prima galleria
      this.firstGallery = attributes?.firstgallery?.data.map(img => ({
        url: `${apiUrl}${img.attributes.url}`,
      })) || [];

      // Popola la seconda galleria
      this.secondGallery = attributes?.secondgallery?.data.map(img => ({
        url: `${apiUrl}${img.attributes.url}`,
      })) || [];

      // Popola la full gallery (stile masonry)
      this.fullGallery = attributes?.fullgallery?.data.map(img => ({
        url: `${apiUrl}${img.attributes.url}`,
      })) || [];

      // Avvia l'animazione per le immagini
      this.initAnimations();
    } catch (error) {
      console.error('Errore durante la chiamata API:', error);
    }
  },
  methods: {
    initAnimations() {
      // Animazioni fade-in e zoom-in per le immagini
      gsap.from(".fade-in", {
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".fade-in",
          start: "top 80%",
        },
      });

      gsap.from(".zoom-in", {
        scale: 0.9,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".zoom-in",
          start: "top 80%",
        },
      });
    }
  },
};
</script>

<style scoped>
.gallery-section {
  max-width: 1000px;
  margin: 0 auto;
}

.content-wrapper {
  max-width: 1000px;
  margin: 0 auto;
}

.h2 {
  color: #000;
  font-weight: 400;
}

.h1 {
  color: #000;
  font-weight: 300;
  line-height: 1.5;
}

.gallery-item {
  width: calc(33.333% - 10px);
  margin: 5px;
  object-fit: cover;
}

.img-fluid {
  object-fit: cover;
}

/* Seconda galleria layout */
.frame-29 {
  position: relative;
  display: grid;
  grid-template-areas: 
    "img2 img1"
    "img2 img3"
    "text text";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.paragraph-section {
  grid-area: text;
  text-align: left;
  font-family: 'Inter-Regular', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #000;
}

.img-one {
  grid-area: img1;
  width: 100%;
}

.img-two {
  grid-area: img2;
  width: 100%;
}

.img-three {
  grid-area: img3;
  width: 100%;
}

/* Full gallery masonry layout */
.masonry-gallery {
  column-count: 3;
  column-gap: 15px;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 15px;
}

.masonry-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

/* Responsività */
@media (max-width: 768px) {
  .frame-29 {
    grid-template-areas: 
      "img1"
      "img2"
      "img3"
      "text";
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .paragraph-section {
    font-size: 14px;
    padding: 10px;
  }

  .gallery-item {
    width: calc(50% - 10px);
  }

  .masonry-gallery {
    column-count: 2;
  }
}
</style>
