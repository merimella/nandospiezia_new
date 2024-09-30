<template>
  <div id="content" class="page-container">
    <Navbar /> 
    <StoriesGallery />

  </div>
</template>

<script>
import Footer from '~/components/Footer.vue';
import HomeGallery from '~/components/MemomoriesGallery.vue';
import StoriesGallery from '~/components/StoriesGallery.vue';

export default {
  components: {
    StoriesGallery,

  }
}
</script>

<style scoped>
.page-container {
  background-color: white;
  min-height: 100vh; /* Assicura che la pagina riempia tutta l'altezza */
  padding-top: 100px;
}
</style>
