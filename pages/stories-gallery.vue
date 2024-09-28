<template>
  <div id="content" class="page-container">
    <Navbar /> 
    <HomeGallery />

  </div>
</template>

<script>
import Footer from '~/components/Footer.vue';
import HomeGallery from '~/components/MemomoriesGallery.vue';

export default {
  components: {
    HomeGallery,

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
