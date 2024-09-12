<template>
  <div v-for="post in posts" :key="post.id">
    <section class="horizontal">
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
            <p ref="paragraph">{{ post.attributes.paragraph }}</p>
            <h5 ref="quote">{{ post.attributes.quote }}</h5>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAsyncData } from 'nuxt/app';

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

  // Scroll orizzontale per la sezione horizontal
  gsap.to(sections, {
    x: () => `-${maxWidth - window.innerWidth}`, // Lo scroll termina all'ultimo elemento
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal",
      pin: true,
      start: "top top",
      scrub: true,
      markers: true,
      end: () => `+=${maxWidth}`, // Definisce la fine dello scroll
    },
  });
});
</script>

<style scoped>
.horizontal {
  padding: 60px 20px 120px;
  box-sizing: border-box;
  background-color: white;
}

.horizontal__container {
  display: flex;
  width: calc(100vw * 3);
  overflow: hidden;
}

.horizontal__item {
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.horizontal__item img {
  width: 30%;
  margin-right: 20px;
}

.text-container {
  text-align: center;
  max-width: 800px;
  padding: 20px;
}

p {
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Forma DJR Text', sans-serif;
}

h5 {
  font-family: 'Forma DJR Text', sans-serif;
  font-weight: 800;
}

p, h5 {
  margin-top: 20px;
}
</style>
