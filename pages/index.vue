<template>
  <div class="page-container">
    <Navbar />
    <div class="header">
      <Header />
    </div>
    <div id="content" class="scroll-content">
      <div class="content-wrapper"> <!-- Aggiungi un contenitore extra -->
        <HomeWrapper />
        <HomeGallery />
      </div>
    </div>
  </div>
</template>


<script setup>

</script>

<style scoped>

/* Assicurati che l'header sia fisso in alto */
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

/* Contenuto scrollabile */
.scroll-content {
  margin-top: 100vh; /* Sposta il contenuto sotto l'header */
  position: relative;
  z-index: 2; /* Assicurati che questo scorra sopra l'header */
}
</style>
