<template>
 

  <div class="page-container">
    <Navbar /> 
  
     <div class="header">
          <HeaderMemories />
        </div>
    <div id="content" class="scroll-content">
        
      <MemomoriesGallery />
    </div>
  </div>
  </template>

<script>
import MemomoriesGallery from '~/components/MemomoriesGallery.vue';
import HeaderMemories from '~/components/HeaderMemories.vue';
import Navbar from '~/components/Navbar.vue';


export default {
  components: {
    MemomoriesGallery
  }
}
</script>

<style scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1; /* Assicurati che il contenuto scorra sotto l'header */
    background-color: white; /* Aggiusta in base al tuo design */
    width: 100%; /* Full width per coprire lo schermo */
    height: 100vh; /* Full height per coprire il viewport se necessario */
    z-index: 1;
  }


  .scroll-content {
    margin-top: 100vh; /* Sposta il contenuto sotto l'header */
    position: relative;
    z-index: 2; /* Assicurati che questo scorra sopra l'header */
    padding-top: 100px;
    background-color: white;

  }
</style>


