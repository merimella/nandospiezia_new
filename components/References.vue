<template>
  <div class="container mt-5"> <!-- Aggiunto margine sopra con mt-5 -->
    <div class="row justify-content-between align-items-center">
      <div class="col-4 col-md-2 d-flex justify-content-center align-items-center logo-wrapper">
        <div class="logo-container">
          <img src="public/weezore-logo.svg" alt="Logo 1" class="img-fluid logo" />
        </div>
      </div>
      <div class="col-4 col-md-2 d-flex justify-content-center align-items-center logo-wrapper">
        <div class="logo-container">
          <img src="public/mywed-logo.svg" alt="Logo 2" class="img-fluid logo" />
        </div>
      </div>
      <div class="col-4 col-md-2 d-flex justify-content-center align-items-center logo-wrapper">
        <div class="logo-container">
          <img src="public/logoanfm.svg" alt="Logo 3" class="img-fluid logo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// You can import SVG files or link them in the img tags above as needed
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 50px; /* Aggiunto spazio sopra al contenitore */
}

.logo-wrapper {
  height: 100px; /* Altezza per mantenere i loghi allineati */
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.logo {
  max-height: 56px;  /* Imposta la dimensione massima dei loghi */
  opacity: 1;        /* Opacità al 100% di default */
  transition: transform 0.3s ease; /* Solo effetto scale */
}

.logo:hover {
  transform: scale(1.05); /* Leggera animazione di zoom al passaggio del mouse */
}

.row {
  margin-left: 0;
  margin-right: 0;
}
</style>
