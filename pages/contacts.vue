<template>
  <div id="content" class="page-container">
    <Navbar />
    <div  class="scroll-content">
      <div class="content-wrapper mx-auto"> <!-- Aggiungi un contenitore extra -->
        <Form />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
// Importa il modulo delle transizioni GSAP

import Form from '~/components/Form.vue';

// Puoi utilizzare le funzioni di transizione definite in `gsap-transitions.js`
</script>

<style scoped>


.scroll-content {

  position: relative;
  z-index: 2; /* Assicurati che questo scorra sopra l'header */
}
.content-wrapper{
  max-width: 1350px;
}

</style>
