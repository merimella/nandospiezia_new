<template>

  
  <div class="smooth-wrapper">
    <div class="smooth-content" v-if="post">
      <!-- Se il post ha una password, chiedi all'utente di inserirla -->
      <PasswordForm v-if="post.attributes.password && !isAuthenticated" @submit="checkPassword" />

      <!-- Mostra il contenuto se non c'è una password o se l'utente è autenticato -->
      <div v-else>
        <!-- Sezione Copertina -->
          <Navbar />
        <section ref="coverSection" class="sectionCover full-page header">
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

        <div class="scroll-content">

              <!-- Sezione Titolo e Contenuto -->
              <section id="content" ref="contentSection" class="section index-up content-container full-page">
                <div class="text-container">
                  <h4 class="split-text">{{ post.attributes.heading }}</h4>
                  <h2 class="split-text">{{ post.attributes.subtitle }}</h2>
                  <p class="split-text">{{ post.attributes.description }}</p>
                </div>
              </section>

                      <!-- Sezione Focus e Paragrafo con Scroll Orizzontale e Sfondo Bianco -->
                <!-- Sezione Focus e Paragrafo con Scroll Orizzontale e Sfondo Bianco -->
              <section class="horizontal-section index-up">
                <div class="horizontal-wrapper">
                  <!-- Primo Slide -->
                  <div class="horizontal-slide">
            <img 
              v-if="post.attributes.focus1 && post.attributes.focus1.data" 
              :src="`${apiUrl}${post.attributes.focus1.data.attributes.url}`" 
              alt="Focus Image 1"
              class="image-horizontal"
            />
          </div>
          <!-- Secondo Slide -->
          <div class="horizontal-slide">
            <img 
              v-if="post.attributes.focus2 && post.attributes.focus2.data" 
              :src="`${apiUrl}${post.attributes.focus2.data.attributes.url}`" 
              alt="Focus Image 2"
              class="image-horizontal"
            />
          </div>
          <!-- Terzo Slide -->
          <div class="horizontal-slide">
            <img 
              v-if="post.attributes.focus3 && post.attributes.focus3.data" 
              :src="`${apiUrl}${post.attributes.focus3.data.attributes.url}`" 
              alt="Focus Image 3"
              class="image-horizontal"
            />
          </div>
          <!-- Quarto Slide con Testo -->
          <div class="horizontal-slide">
            <div class="text-container">
              <p>{{ post.attributes.paragraph }}</p>
              <h5>{{ post.attributes.quote }}</h5>
            </div>
          </div>
        
  </div>
</section>


        <!-- Sezione Galleria con Sfondo Bianco -->
        <section v-if="post.attributes.gallery && post.attributes.gallery.data.length" class="index-up section gallerySection full-page white-background">
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
    <div class="index-up footer">
      <FooterForm />
      <Footer />
    </div>
  </div>
  </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';
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
const apiUrl = ref(config.public.strapiApiUrl);
const apiToken = config.public.strapiApiToken;

// Variabili reactive per password e post
const inputPassword = ref('');
const isAuthenticated = ref(false);
const errorMessage = ref('');
const post = ref(null);

// Recupera il post da Strapi usando lo slug
const { data } = await useAsyncData('post', () =>
  $fetch(`${apiUrl.value}/api/posts?filters[slug][$eq]=${slug}&populate=*`, {
    headers: {
      Authorization: `Bearer ${apiToken}`
    }
  })
);

post.value = data.value?.data?.[0] || null;

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
  if (window.innerWidth > 767) {
    // Scroll orizzontale per la sezione "Focus e Paragrafo"
    const horizontalSection = document.querySelector(".horizontal-section");
    const horizontalWrapper = document.querySelector(".horizontal-wrapper");

    const images = horizontalWrapper.querySelectorAll("img");
    let imagesLoadedCount = 0;

    images.forEach((img) => {
      if (img.complete) {
        imagesLoadedCount++;
        if (imagesLoadedCount === images.length) {
          startHorizontalScroll();
        }
      } else {
        img.onload = () => {
          imagesLoadedCount++;
          if (imagesLoadedCount === images.length) {
            startHorizontalScroll();
          }
        };
      }
    });

    const startHorizontalScroll = () => {
      const totalScrollWidth = horizontalWrapper.scrollWidth - window.innerWidth;

      gsap.to(horizontalWrapper, {
        x: -totalScrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: horizontalSection,
          pin: true,
          scrub: true,
          end: () => "+=" + totalScrollWidth,
        },
      });
    };
  } else {
    // Opzionalmente, puoi aggiungere animazioni specifiche per il mobile qui
  }
};

// Esegui al montaggio del componente
onMounted(() => {
  if (!post.value) return;

  if (!post.value.attributes.password) {
    isAuthenticated.value = true;
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
  
  
}
.scroll-content{
  z-index: 2!important;
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
  font-size: 40px !important;
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

h4,
p {
  margin-top: 20px;
}

h4 {
  margin-bottom: 30px;
}

p {
  font-size: 1.5rem;
}

/* Sezione Orizzontale */
.horizontal-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: white;
}

.horizontal-wrapper {
  display: flex;
  height: 100%;
}

.horizontal-slide {
  flex: 0 0 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-horizontal {
  width: auto;
  max-height: 80vh;
  object-fit: cover;
}

/* Ridurre la larghezza massima del contenitore del testo */
.horizontal-slide .text-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.text-container p {
  margin-bottom: 20px;
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

/* Stili per Dispositivi Mobili */
@media (max-width: 767px) {
  /* Sezione Orizzontale su Mobile */
  .horizontal-wrapper {
    flex-direction: column;
  }

  .horizontal-slide {
    flex: 0 0 auto;
    width: 100%;
    height: auto;
    min-height: 100vh;
  }

  .horizontal-section {
    height: auto;
  }

  /* Galleria Masonry su Mobile */
  .masonry-gallery {
    column-count: 2;
  }

}

</style>
