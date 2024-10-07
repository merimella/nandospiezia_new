<template>
 

  <div class="page-container">
    <Navbar /> 
  
    <div :id="isMobile ? 'content' : ''" class="header"> <!-- ID su header per mobile -->
      <Header />
    </div>
    <div :id="!isMobile ? 'content' : ''" class="scroll-content"> <!-- ID su scroll-content per desktop -->
        
      <MemomoriesGallery />
      <Footer />
    </div>
  </div>
  </template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Flag per verificare se siamo su mobile
const isMobile = ref(false);

// Funzione per controllare la dimensione dello schermo
const checkScreenSize = () => {
  isMobile.value = window.innerWidth <= 768; // Imposta mobile per schermi sotto i 768px
};

// Al montaggio del componente, controlla la dimensione dello schermo e aggiungi l'event listener
onMounted(() => {
  checkScreenSize(); // Verifica al caricamento
  window.addEventListener('resize', checkScreenSize); // Ascolta il ridimensionamento
});

// Pulisci l'event listener quando il componente viene smontato
onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize);
});
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


