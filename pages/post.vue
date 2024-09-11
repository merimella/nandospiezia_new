<template>
  <div class="wrapper">
    <div v-for="post in posts" :key="post.id">

      <!-- Sezione di copertina con immagine e titolo -->
      <section class="coverSection cover-image-container full-page">
        <img 
          v-if="post.attributes.image && post.attributes.image.data" 
          :src="`http://localhost:1337${post.attributes.image.data.attributes.url}`" 
          alt="Cover Image"
          class="cover-image"
        />
        <div class="overlay-text">
          <h1 ref="title">{{ post.attributes.title }}</h1>
        </div>
      </section>

      <!-- Sezione per sottotitolo e descrizione -->
      <section class="contentSection content-container full-page">
        <div class="text-container">
          <h4 ref="heading">{{ post.attributes.heading }}</h4>
          <h2 ref="subtitle">{{ post.attributes.subtitle }}</h2>
          <p ref="description">{{ post.attributes.description }}</p>
        </div>
      </section>

      <!-- Sezione di scroll orizzontale -->
      <section class="horizontal">
        <div class="horizontal__container">

          <div class="horizontal__item">
            <img v-if="post.attributes.focus1 && post.attributes.focus1.data" 
              :src="`http://localhost:1337${post.attributes.focus1.data.attributes.url}`" 
              alt="Focus Image 1" />
              <img v-if="post.attributes.focus2 && post.attributes.focus2.data" 
              :src="`http://localhost:1337${post.attributes.focus2.data.attributes.url}`" 
              alt="Focus Image 2" />
              <img v-if="post.attributes.focus3 && post.attributes.focus2.data" 
              :src="`http://localhost:1337${post.attributes.focus3.data.attributes.url}`" 
              alt="Focus Image 3" />
          </div>
          
          <div class="horizontal__item">
            <div class="text-container">
              <p ref="paragraph">{{ post.attributes.paragraph }}</p>
              <h5 ref="quote">{{ post.attributes.quote }}</h5>
            </div>
          </div>

        </div>
      </section>

      <!-- Sezione Galleria -->
      <section class="gallerySection gallery-container full-page" v-if="post.attributes.gallery && post.attributes.gallery.data.length">
        <div class="gallery">
          <div v-for="image in post.attributes.gallery.data" :key="image.id" class="gallery-image">
            <img :src="`http://localhost:1337${image.attributes.url}`" alt="Gallery Image" />
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const { data } = await useAsyncData('posts', () => $fetch('http://localhost:1337/api/posts?populate=*', {
  headers: {
    Authorization: `Bearer 98788d4aa362cc31587b9600529fd6314d219985bae8b0d15838b3e114f6611d6c718ea819da564042737ca93cc7c3434a3f840c05a26be22a4794bd73bd1fb3f0e764bef85d1ccc10cd780f6b280c98fe81e427eb62b44d2f47eb6cdce8c64c81501b7005ff128ef23545e8e10e7747359ccda6028a13777e406eaf3180b219`
  }
}));

const posts = data.value?.data || [];

onMounted(() => {
  const sections = gsap.utils.toArray(".horizontal__item");
  let maxWidth = 0;

  // Calcola la larghezza totale degli elementi orizzontali
  const getMaxWidth = () => {
    maxWidth = sections.reduce((acc, section) => acc + section.offsetWidth, 0);
    
  };

  getMaxWidth();
  ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

  gsap.set('section.spacer', { minHeight: window.innerHeight - document.querySelector('.horizontal').offsetHeight });

  // Pin delle sezioni verticali (coverSection e contentSection)
  ScrollTrigger.create({
    trigger: ".coverSection",
    pin: true,
    pinSpacing: false,
    start: "top top",
    end: "+=100%",
    scrub: true,
    markers: true,
  });

  ScrollTrigger.create({
    trigger: ".contentSection",
    pin: true,
    start: "top top",
    end: "+=100%",
    scrub: true,
    markers: true,
  });

  

  // Scroll orizzontale per la sezione horizontal
  gsap.to(sections, {
    x: () => `-${maxWidth - window.innerWidth}`,  // Assicurati che lo scroll termini all'ultimo elemento
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal",
      pin: true,
      start: "top top",
      scrub: true,
      markers: true,
      end: () => `+=${maxWidth}`,  // Definisci correttamente la fine dello scroll
    },
  });
});
</script>


<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.full-page {
  height: 100vh; /* Altezza intera pagina */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

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

.horizontal {
  padding: 60px 20px 120px;
  box-sizing: border-box;
}

.horizontal__container {
  display: flex;
  width: calc(100vw * 3); /* Regola la larghezza in base al numero di elementi */
  overflow: hidden;
}

.horizontal__item {
  width: 100vw; /* Ogni item occuperà l'intera larghezza dello schermo */
  
  box-sizing: border-box;
  display: flex; /* Utilizza Flexbox */
  flex-direction:row; /* Imposta la direzione verticale per gli elementi interni */
  justify-content: center; /* Centra verticalmente gli elementi */
  align-items: center; /* Centra orizzontalmente se desiderato */
  text-align: center;
}

.horizontal__item img{
  width: 30%;
  margin-right: 20px;
}

.horizontal__item:first-of-type {
  margin-left: 0;
}

.horizontal__item:last-of-type {
  margin-left: 0;
  display: flex; /* Utilizza Flexbox */
  flex-direction: column; /* Imposta la direzione verticale per gli elementi interni */
  justify-content: center; /* Centra verticalmente gli elementi */
  align-items: center; /* Centra orizzontalmente se desiderato */
  text-align: center; /* Opzionale: centra il testo */
  
}

.text-container {
  text-align: center;
  max-width: 800px;
  padding: 20px;
}

.content-container {
  background-color: white;
  color: #111;
}



h1 {
  font-size: 4rem;
  font-weight: 500;
  font-family: 'SilkSerif', serif;  /* Utilizzo del font definito in fonts.css */
}

h2 {
  font-size: 3rem;
  font-weight: 700;
  font-family: 'SilkSerif', serif; /* Utilizzo del font definito in fonts.css */
}

h4{
  font-weight: 500;
  font-family: 'Forma DJR Display', sans-serif;
}

p {
  font-size: 1.5rem;
  margin-top: 20px;
  font-weight: 400;
  font-family: 'Forma DJR Text', sans-serif;
}

h5{
  font-family: 'Forma DJR Text', sans-serif;  /* Utilizzo del font definito in fonts.css */
  font-weight: 800;
}

h4, h5, p {
  margin-top: 20px;
}

.gallery-container {
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gallery {
  display: flex;
}

.gallery-image {
  width: 33.33%;
  padding: 10px;
}

.gallery-image img {
  width: 100%;
  height: auto;
}

</style>