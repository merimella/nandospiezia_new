<template>
  <div v-for="post in posts" :key="post.id">
    <section class="contentSection content-container full-page">
      <div class="text-container">
        <h4 ref="heading">{{ post.attributes.heading }}</h4>
        <h2 ref="subtitle">{{ post.attributes.subtitle }}</h2>
        <p ref="description">{{ post.attributes.description }}</p>
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
  max-width: 800px;
  padding: 20px;
}

h2 {
  font-size: 3rem;
  font-weight: 700;
  font-family: 'SilkSerif', serif;
}

h4 {
  font-weight: 500;
  font-family: 'Forma DJR Display', sans-serif;
}

p {
  font-size: 1.5rem;
  margin-top: 20px;
  font-weight: 400;
  font-family: 'Forma DJR Text', sans-serif;
}

h4, p {
  margin-top: 20px;
}
</style>
