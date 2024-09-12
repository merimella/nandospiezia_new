<template>
  <div v-for="post in posts" :key="post.id">
    
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
  </div>
</template>

<script lang="js" setup>
import { useAsyncData } from 'nuxt/app';



const { data } = await useAsyncData('posts', () => $fetch('http://localhost:1337/api/posts?populate=*', {
  headers: {
    Authorization: `Bearer 98788d4aa362cc31587b9600529fd6314d219985bae8b0d15838b3e114f6611d6c718ea819da564042737ca93cc7c3434a3f840c05a26be22a4794bd73bd1fb3f0e764bef85d1ccc10cd780f6b280c98fe81e427eb62b44d2f47eb6cdce8c64c81501b7005ff128ef23545e8e10e7747359ccda6028a13777e406eaf3180b219`
  }
}));

const posts = data.value?.data || [];



</script>

<style scoped>
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

h1 {
  font-size: 4rem;
  font-weight: 500;
  font-family: 'SilkSerif', serif;
}
</style>
