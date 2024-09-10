<template>
  <div> <!-- Single root element -->
    <Header 
      title="Nando Spiezia" 
      subtitle="PHOTOGRAPHY" 
      :images="['/images/header-slide-1.webp', '/images/header-slide-2.webp', '/images/header-slide-3.webp']" 
    />
    <section class="content">
      <!-- Rest of your homepage content -->
    </section>
  </div>
</template>


<script setup>
import Header from '~/components/Header.vue';
</script>

<style scoped>
.content {
  margin-top: 100vh; /* Sposta il contenuto sotto l'header */
}
</style>

<style scoped>
div {
  background-color: #000;
}
</style>