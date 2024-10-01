<template>

  
  <div class="smooth-wrapper">
    <div class="smooth-content" v-if="post">
      <!-- Se il post ha una password, chiedi all'utente di inserirla -->
      <PasswordForm v-if="post.attributes.password && !isAuthenticated" @submit="checkPassword" />

      <!-- Mostra il contenuto se non c'è una password o se l'utente è autenticato -->
      <div v-else>
        <!-- Sezione Copertina -->
          <Navbar />
        <section ref="coverSection" class="sectionCover full-page">
          <div class="coverSection cover-image-container full-page">
            <img 
              v-if="post.attributes.image && post.attributes.image.data" 
              :src="`${apiUrl}${post.attributes.image.data.attributes.url}`" 
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
        <section id="content" ref="contentSection" class="section content-container full-page">
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
      <img 
        v-if="post.attributes.focus1 && post.attributes.focus1.data" 
        :src="`${apiUrl}${post.attributes.focus1.data.attributes.url}`" 
        alt="Focus Image 1"
        class="image-horizontal"
      />
      <img 
        v-if="post.attributes.focus2 && post.attributes.focus2.data" 
        :src="`${apiUrl}${post.attributes.focus2.data.attributes.url}`" 
        alt="Focus Image 2"
        class="image-horizontal"
      />
      <img 
        v-if="post.attributes.focus3 && post.attributes.focus3.data" 
        :src="`${apiUrl}${post.attributes.focus3.data.attributes.url}`" 
        alt="Focus Image 3"
        class="image-horizontal"
      />
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
                <img :src="`${apiUrl}${image.attributes.url}`" class="img-fluid" alt="Gallery Image" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
   
   <Footer />
  </div>

</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';
import { useAsyncData, useRuntimeConfig } from 'nuxt/app';
import PasswordForm from '~/components/PasswordForm.vue';

// Recupera lo slug dall'URL dinamico
const route = useRoute();
const slug = route.params.slug;

// Ottieni la configurazione di runtime
const config = useRuntimeConfig();
const apiUrl = ref(config.public.strapiApiUrl);  // Usa ref per apiUrl
const apiToken = config.public.strapiApiToken;

// Variabili reactive per password e post
const inputPassword = ref('');
const isAuthenticated = ref(false);
const errorMessage = ref('');
const post = ref(null); // Definisci il post come reactive

// Recupera il post da Strapi usando lo slug
const { data } = await useAsyncData('post', () => 
  $fetch(`${apiUrl.value}/api/posts?filters[slug][$eq]=${slug}&populate=*`, {  // Usa apiUrl.value qui
    headers: {
      Authorization: `Bearer ${apiToken}`
    }
  })
);

post.value = data.value?.data?.[0] || null;  // Assegna il valore al post

// Funzione per controllare la password
const checkPassword = (submittedPassword) => {
  if (typeof submittedPassword !== 'string') {
    errorMessage.value = 'Errore: La password inserita non è valida.';
    return;
  }

  if (submittedPassword.trim() === post.value.attributes.password) {
    isAuthenticated.value = true;
    errorMessage.value = '';
    initializeAnimations();
  } else {
    errorMessage.value = 'Password errata. Riprova.';
  }
};

// Funzione per inizializzare le animazioni
const initializeAnimations = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

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
};

// Esegui al montaggio del componente
onMounted(() => {
  if (!post.value) return;

  if (!post.value.attributes.password) {
    initializeAnimations();
  }
});
</script>


<style scoped>
/* Imposta tutte le sezioni come full-page */
.full-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

/* Sezione Copertina: Testi e immagine centrati */
.cover-image-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex; /* Per la centratura verticale */
  align-items: center; /* Allinea verticalmente il contenuto */
  justify-content: center; /* Allinea orizzontalmente il contenuto */
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
  font-size: 40px!important;
  font-weight: 500;
  font-family: 'SilkSerif', serif;
}

/* Contenuto: Centrato e con testo giustificato */
.content-container {
  background-color: white;
  color: #111;
  display: flex;
  align-items: center; /* Centrato verticalmente */
  justify-content: center; /* Centrato orizzontalmente */
}

.text-container {
  max-width: 900px;
  text-align: center;
}

.text-container p {
  text-align: justify;
  text-justify: inter-word;
  font-size: 1.5rem;
  line-height: 1.8;
  margin-top: 20px;
}

h4, p {
  margin-top: 20px;
}

h4 {
  margin-bottom: 30px;
}

p {
  font-size: 1.5rem;
}

/* Sezione Orizzontale */
.horizontal {
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: center; /* Centratura verticale */
  justify-content: center;
  overflow: hidden;
  padding-bottom: 0; /* Evita spazio extra sotto la sezione */
}

.horizontal__container {
  display: flex;
  width: calc(100vw * 3); /* Tre volte la larghezza della finestra */
  height: 100vh; /* Imposta l'altezza */
}

.horizontal__item {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.horizontal__item img {
  width: auto;
  height: 80vh;
  aspect-ratio: 4/5;
  object-fit: cover;
  margin: 0 10px;
}

/* Ridurre la larghezza massima del contenitore del testo */
.horizontal__item .text-container {
  max-width: 600px; /* Limita la larghezza massima del testo */
  margin: 0 auto; /* Centra il contenitore del testo */
}

.text-container p {
  margin-bottom: 20px; /* Aggiungi spazio sotto i paragrafi */
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

/* Stili base per le sezioni */
.section {
  min-height: 100vh;
  padding: 20px;
  position: relative;
}

.error {
  color: red;
}



</style>