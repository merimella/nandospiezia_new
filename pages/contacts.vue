<template>

    <div class="d-flex justify-content-center align-items-center min-vh-100">
      <Navbar /> 
      <Form />
    </div>

</template>

<script setup>
// Importa il modulo delle transizioni GSAP

import Form from '~/components/Form.vue';

// Puoi utilizzare le funzioni di transizione definite in `gsap-transitions.js`
</script>

<style scoped>
div {
  background-color: white; /* Imposta lo sfondo bianco */
}

/* Evita che la pagina abbia margini esterni */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.min-vh-100 {
  min-height: 100vh; /* Imposta l'altezza minima a 100% della viewport */
}
</style>
