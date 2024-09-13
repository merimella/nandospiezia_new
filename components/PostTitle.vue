<template>
  <div v-for="post in posts" :key="post.id">
    <section class="contentSection content-container full-page">
      <div class="text-container">
        <h4 class="split-text" ref="heading">{{ post.attributes.heading }}</h4>
        <h2 class="split-text" ref="subtitle">{{ post.attributes.subtitle }}</h2>
        <p class="split-text" ref="description">{{ post.attributes.description }}</p>
      </div>
    </section>
  </div>
</template>

<script lang="js" setup>
import { useAsyncData } from 'nuxt/app';
import { gsap } from 'gsap';
import SplitText from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Importa ScrollTrigger

gsap.registerPlugin(SplitText, ScrollTrigger);

// Recupera i dati dal tuo backend Strapi
const { data } = await useAsyncData('posts', () => $fetch('http://localhost:1337/api/posts?populate=*', {
  headers: {
    Authorization: `Bearer 98788d4aa362cc31587b9600529fd6314d219985bae8b0d15838b3e114f6611d6c718ea819da564042737ca93cc7c3434a3f840c05a26be22a4794bd73bd1fb3f0e764bef85d1ccc10cd780f6b280c98fe81e427eb62b44d2f47eb6cdce8c64c81501b7005ff128ef23545e8e10e7747359ccda6028a13777e406eaf3180b219`
  }
}));

// Memorizza i post recuperati
const posts = data.value?.data || [];

// Aggiunge l'animazione SplitText e l'effetto Parallax dopo il render
onMounted(() => {
  // Applica SplitText agli elementi
  const splitTextElements = document.querySelectorAll('.split-text');
  
  splitTextElements.forEach((element) => {
    const splitTitle = new SplitText(element, { type: 'lines', linesClass: 'lineChild' });
    new SplitText(element, { type: 'lines', linesClass: 'lineParent' });

    // Crea un timeline per l'animazione SplitText
    const tl = gsap.timeline();
    tl.from(splitTitle.lines, {
      y: 80,
      opacity: 0,
      duration: 0.35,
      stagger: 0.15,
      ease: 'power2.out'
    });
  });

  // Riferimenti agli elementi per il parallax
  const heading = document.querySelectorAll('h4');
  const subtitle = document.querySelectorAll('h2');
  const description = document.querySelectorAll('p');
  
  // Effetto parallax per il titolo
  heading.forEach((el) => {
    gsap.to(el, {
      yPercent: -20, // Sposta il titolo verso l'alto
      ease: "none",
      scrollTrigger: {
        trigger: el,
        scrub: true, // Sincronizza l'animazione con lo scroll
      }
    });
  });

  // Effetto parallax per il sottotitolo
  subtitle.forEach((el) => {
    gsap.to(el, {
      yPercent: -15, // Sposta il sottotitolo verso l'alto
      ease: "none",
      scrollTrigger: {
        trigger: el,
        scrub: true,
      }
    });
  });

  // Effetto parallax per la descrizione
  description.forEach((el) => {
    gsap.to(el, {
      yPercent: -10, // Sposta la descrizione verso l'alto
      ease: "none",
      scrollTrigger: {
        trigger: el,
        scrub: true,
      }
    });
  });
});
</script>

<style scoped>
.full-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

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

h4 {
  font-family: "ivypresto-display", serif;
  font-weight: 400;
  font-style: normal;
  margin-bottom: 30px;
  text-decoration: underline;
}

p {
  font-size: 1.5rem;
  margin-top: 20px;
  font-weight: 400;
  font-family: "ivypresto-display", serif;
  font-style: normal;
}

h4, p {
  margin-top: 20px;
}

/* Aggiungi overflow nascosto per il testo diviso */
.split-text {
  overflow: hidden;
}
</style>
