<template>
  <div class="smooth-wrapper">
    <div class="smooth-content" v-if="post">
      <!-- Sezione Copertina -->
      <section ref="coverSection" class="sectionCover full-page">
        <div class="coverSection cover-image-container full-page">
          <img 
            v-if="post.attributes.image && post.attributes.image.data" 
            :src="`http://localhost:1337${post.attributes.image.data.attributes.url}`" 
            alt="Cover Image"
            class="cover-image"
            ref="coverImage"
          />
          <div class="overlay-text" ref="overlayText">
            <h1 class="split-text" ref="title">{{ post.attributes.title }}</h1>
          </div>
        </div>
      </section>

      <!-- Sezione Titolo e Contenuto -->
      <section ref="contentSection" class="section content-container full-page">
        <div class="text-container">
          <h4 class="split-text">{{ post.attributes.heading }}</h4>
          <h2 class="split-text">{{ post.attributes.subtitle }}</h2>
          <p class="split-text">{{ post.attributes.description }}</p>
        </div>
      </section>

      <!-- Sezione Focus e Paragrafo con Scroll Orizzontale e Sfondo Bianco -->
      <section class="section horizontal white-background">
        <div class="horizontal__container">
          <div class="horizontal__item">
            <img v-if="post.attributes.focus1 && post.attributes.focus1.data" 
              :src="`http://localhost:1337${post.attributes.focus1.data.attributes.url}`" 
              alt="Focus Image 1" />
            <img v-if="post.attributes.focus2 && post.attributes.focus2.data" 
              :src="`http://localhost:1337${post.attributes.focus2.data.attributes.url}`" 
              alt="Focus Image 2" />
            <img v-if="post.attributes.focus3 && post.attributes.focus3.data" 
              :src="`http://localhost:1337${post.attributes.focus3.data.attributes.url}`" 
              alt="Focus Image 3" />
          </div>

          <div class="horizontal__item">
            <div class="text-container">
              <p>{{ post.attributes.paragraph }}</p>
              <h5>{{ post.attributes.quote }}</h5>
            </div>
          </div>
        </div>
      </section>

      <!-- Sezione Galleria con Sfondo Bianco -->
      <section v-if="post.attributes.gallery && post.attributes.gallery.data.length" class="section gallerySection full-page white-background">
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
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import SplitText from 'gsap/SplitText';
import { useAsyncData } from 'nuxt/app';

// Recupera lo slug dall'URL dinamico
const route = useRoute();
const slug = route.params.slug;

// Recupera il post da Strapi usando lo slug
const { data } = await useAsyncData('post', () => $fetch(`http://localhost:1337/api/posts?filters[slug][$eq]=${slug}&populate=*`, {
  headers: {
    Authorization: `Bearer 98788d4aa362cc31587b9600529fd6314d219985bae8b0d15838b3e114f6611d6c718ea819da564042737ca93cc7c3434a3f840c05a26be22a4794bd73bd1fb3f0e764bef85d1ccc10cd780f6b280c98fe81e427eb62b44d2f47eb6cdce8c64c81501b7005ff128ef23545e8e10e7747359ccda6028a13777e406eaf3180b219`
  }
}));

const post = data.value?.data?.[0] || null;

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const coverSection = ref(null);
const contentSection = ref(null);

onMounted(() => {
  if (!post) return;

  // Inizializza ScrollSmoother
  const smoother = ScrollSmoother.create({
    wrapper: '.smooth-wrapper',
    content: '.smooth-content',
    smooth: 1.5,
  });

  // Animazioni per la sezione copertina e contenuto
  const coverImage = document.querySelector('.cover-image');
  const overlayText = document.querySelector('.overlay-text');
  const splitTextElements = document.querySelectorAll('.split-text');

  // Anima la copertina
  gsap.to(coverImage, {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
      trigger: coverImage,
      scrub: true,
    }
  });

  gsap.to(overlayText, {
    yPercent: 15,
    ease: "none",
    scrollTrigger: {
      trigger: overlayText,
      scrub: true,
    }
  });

  // Animazioni SplitText
  splitTextElements.forEach((element) => {
    const splitTitle = new SplitText(element, { type: 'lines', linesClass: 'lineChild' });
    new SplitText(element, { type: 'lines', linesClass: 'lineParent' });

    gsap.from(splitTitle.lines, {
      y: 80,
      opacity: 0,
      duration: 0.75,
      stagger: 0.15,
    });
  });

  // Scroll orizzontale per la sezione "Focus e Paragrafo"
  const sections = gsap.utils.toArray(".horizontal__item");
  let maxWidth = 0;

  const getMaxWidth = () => {
    maxWidth = sections.reduce((acc, section) => acc + section.offsetWidth, 0);
  };

  getMaxWidth();
  ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

  gsap.to(sections, {
    x: () => `-${maxWidth - window.innerWidth}`,
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal",
      pin: true,
      start: "top top",
      scrub: true,
    },
  });

  // Animazioni per la galleria
  gsap.utils.toArray('.masonry-item').forEach((image) => {
    gsap.from(image, {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: image,
        start: "top 80%",
        toggleActions: "play none none none",
        stagger: { each: 0.15, from: "start" },
      },
    });
  });
});
</script>

<style scoped>
/* Stili ottimizzati per copertina, contenuto, galleria e sezione orizzontale */

/* Imposta tutte le sezioni come full-page */
.full-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

/* Copertina */
.cover-image-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}
h1 {
  font-size: 4rem;
  font-weight: 500;
  font-family: 'SilkSerif', serif;
}

/* Contenuto */
.content-container {
  background-color: white;
  color: #111;
}
.text-container {
  text-align: center;
  max-width: 900px;
  padding: 20px;
}
h2 {
  font-size: 3rem;
  font-weight: 500;
  text-transform: uppercase;
  font-family: 'SilkSerif', serif;
}
h4, p {
  margin-top: 20px;
}
h4 {
  text-decoration: underline;
  font-family: "ivypresto-display", serif;
  margin-bottom: 30px;
}
p {
  font-size: 1.5rem;
  font-family: "ivypresto-display", serif;
}

/* Sezione Orizzontale con Sfondo Bianco */
.horizontal {
  height: 100vh;
  background-color: white;
  overflow: hidden; /* Evita il taglio degli elementi */
}
.horizontal__container {
  margin-top: 300px;
  display: flex;
  width: calc(100vw * 3);
}
.horizontal__item {
  width: 100vw;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.horizontal__item img {
  width: 30%;
  margin-right: 20px;
}

/* Galleria con sfondo bianco */
.white-background {
  
  background-color: white;
}

.gallery-container {
  max-width: 980px;
  margin: 0 auto;
}
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

/* Aggiungi uno stile di base per le sezioni */
.section {
  min-height: 100vh;
  padding: 20px;
}
</style>
