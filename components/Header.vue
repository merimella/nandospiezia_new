<template>
  <header class="fullpage-header">
    <div class="content">
      <!-- Slideshow -->
      <ul class="slideshow">
        <li v-for="(image, index) in images" :key="index" :class="{ active: index === currentImage }">
          <img :src="image" alt="Slideshow Image" />
        </li>
      </ul>

      <!-- Testo sovrapposto -->
      <div class="text-overlay">
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentImage: 0 // Indice dell'immagine corrente
    };
  },
  mounted() {
    this.startSlideshow(); // Avvia lo slideshow quando il componente è montato
  },
  methods: {
    startSlideshow() {
      setInterval(() => {
        this.currentImage = (this.currentImage + 1) % this.images.length; // Cicla attraverso le immagini
      }, 3000); // Cambia immagine ogni 3 secondi
    }
  }
};
</script>

<style scoped>
.fullpage-header {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 2; /* Set this to be under the navbar but above other content */
}


.content {
  position: relative;
  width: 100%;
  height: 100%;
}

.slideshow {
  position: relative;
  width: 100%;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.slideshow li {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.slideshow li.active {
  opacity: 1; /* Mostra solo l'immagine corrente */
}

.slideshow img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 10;
}

h1, h2 {
  margin: 0;
}
h1{
  font-size: 4rem;
  font-weight: 200;
  font-family: 'SilkSerif', serif; 
  text-transform: uppercase;
}
h2{
  font-weight: 300;
  font-family: 'Forma DJR Text', sans-serif;
  letter-spacing: 6px;
  font-size: 1rem;
  }
</style>
