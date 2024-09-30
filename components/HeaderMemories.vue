<template>
  <header class="fullpage-header">
    <div class="content">
      <!-- Slideshow -->
      <ul class="slideshow">
        <li v-for="(image, index) in images" :key="index" :class="{ active: index === currentImage }">
          <img :src="image || '/images/default.webp'" alt="Slideshow Image" />
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
import { ref, onMounted } from 'vue';

export default {
  data() {
    return {
      title: '',
      subtitle: '',
      images: [],
      currentImage: 0,
      interval: null // Memorizza l'intervallo per lo slideshow
    };
  },
  async mounted() {
    try {
      // Chiamata API per recuperare i dati da Strapi
      const response = await fetch('http://localhost:1337/api/header-sliders?populate=*', {
        headers: {
          Authorization: `Bearer 98788d4aa362cc31587b9600529fd6314d219985bae8b0d15838b3e114f6611d6c718ea819da564042737ca93cc7c3434a3f840c05a26be22a4794bd73bd1fb3f0e764bef85d1ccc10cd780f6b280c98fe81e427eb62b44d2f47eb6cdce8c64c81501b7005ff128ef23545e8e10e7747359ccda6028a13777e406eaf3180b219`,
        },
      });
      
      const data = await response.json();
      const attributes = data.data[0]?.attributes; // Accede ai dati del primo header-slider

      // Popola i dati restituiti dall'API
      this.title = attributes?.title || 'Default Title';
      this.subtitle = attributes?.subtitle || 'Default Subtitle';

      // Concatenare il percorso base per gli URL delle immagini
      this.images = [
      `http://localhost:1337${attributes?.headerSlide1?.data?.attributes?.url}`,
      `http://localhost:1337${attributes?.headerSlide2?.data?.attributes?.url}`,
      `http://localhost:1337${attributes?.headerSlide3?.data?.attributes?.url}`,
      `http://localhost:1337${attributes?.headerSlide4?.data?.attributes?.url}`,  // Correzione per headerSlider4
      `http://localhost:1337${attributes?.headerSlide5?.data?.attributes?.url}`
    ];

      // Avvia lo slideshow
      this.startSlideshow();
    } catch (error) {
      console.error('Errore durante la chiamata API:', error);
    }
  },
  methods: {
    startSlideshow() {
      if (this.images.length === 0) return; // Evita slideshow vuoti
      this.interval = setInterval(() => {
        this.currentImage = (this.currentImage + 1) % this.images.length;
      }, 3000);
    },
    stopSlideshow() {
      clearInterval(this.interval);
    }
  },
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
  z-index: 2;
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
  opacity: 1;
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


.text-overlay h1 {
  font-size: 4rem!important;
  font-weight: 200;
  font-family: 'SilkSerif', serif;
  text-transform: uppercase;
  white-space: nowrap;  /* Impedisce il testo di andare a capo */
  overflow: hidden;      /* Nasconde l'eccesso di testo */
  text-overflow: ellipsis;  /* Aggiunge ellissi (...) se il testo è troppo lungo */
}

.text-overlay h2 {
  font-weight: 300;
  font-family: 'Forma DJR Text', sans-serif;
  letter-spacing: 6px;
  font-size: 1rem!important;
  white-space: nowrap;  /* Impedisce il testo di andare a capo */
  overflow: hidden;      /* Nasconde l'eccesso di testo */
  text-overflow: ellipsis;  /* Aggiunge ellissi (...) se il testo è troppo lungo */
}


h1, h2 {
  margin: 0;
}

h1 {
  font-size: 4rem!important;
  font-weight: 200;
  font-family: 'SilkSerif', serif;
  text-transform: uppercase;
}

h2 {
  font-weight: 300;
  font-family: 'Forma DJR Text', sans-serif;
  letter-spacing: 6px;
  font-size: 1rem!important;
}
</style>
