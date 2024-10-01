<template>
  <header class="fullpage-header">
    <div class="content">
      <!-- Slideshow -->
      <ul class="slideshow">
        <li v-for="(image, index) in currentImages" :key="index" :class="{ active: index === currentImage }">
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
import { useRuntimeConfig } from '#app'; // Importiamo useRuntimeConfig per accedere alle variabili di ambiente

export default {
  data() {
    return {
      title: '',
      subtitle: '',
      imagesDesktop: [], // Immagini per desktop
      imagesMobile: [], // Immagini per mobile
      currentImages: [], // Immagini attualmente visualizzate (desktop o mobile)
      currentImage: 0, // Indice immagine attuale nello slideshow
      interval: null // Memorizza l'intervallo per lo slideshow
    };
  },
  async mounted() {
    try {
      // Otteniamo il runtime config da Nuxt
      const config = useRuntimeConfig()
       console.log('strapiApiUrl:', config.public.strapiApiUrl);
       console.log('strapiApiToken:', config.public.strapiApiToken);
      const apiUrl = config.public.strapiApiUrl;
      const apiToken = config.public.strapiApiToken; // Usa strapiApiToken, non strapiBearerKey

      // Chiamata API per recuperare i dati da Strapi
      const response = await fetch(`${apiUrl}/api/header-sliders?populate=*`, {
        headers: {
          Authorization: `Bearer ${apiToken}`, // Usa il token API corretto
        },
      });
      
      if (!response.ok) {
        throw new Error(`Errore nella richiesta API: ${response.statusText}`);
      }

      const data = await response.json();
      const attributes = data.data[0]?.attributes;

      // Popola i dati restituiti dall'API
      this.title = attributes?.title || 'Default Title';
      this.subtitle = attributes?.subtitle || 'Default Subtitle';

      // Popola le immagini per desktop
      this.imagesDesktop = [
        `${apiUrl}${attributes?.headerSlide1?.data?.attributes?.url}`,
        `${apiUrl}${attributes?.headerSlide2?.data?.attributes?.url}`,
        `${apiUrl}${attributes?.headerSlide3?.data?.attributes?.url}`,
        `${apiUrl}${attributes?.headerSlide4?.data?.attributes?.url}`,
        `${apiUrl}${attributes?.headerSlide5?.data?.attributes?.url}`
      ];

      // Popola le immagini per mobile
      this.imagesMobile = [
        `${apiUrl}${attributes?.headerSlideMobile1?.data?.attributes?.url}`,
        `${apiUrl}${attributes?.headerSlideMobile2?.data?.attributes?.url}`,
        `${apiUrl}${attributes?.headerSlideMobile3?.data?.attributes?.url}`,
        `${apiUrl}${attributes?.headerSlideMobile4?.data?.attributes?.url}`,
        `${apiUrl}${attributes?.headerSlideMobile5?.data?.attributes?.url}`
      ];

      // Avvia lo slideshow
      this.updateImages();
      this.startSlideshow();

      // Aggiungi un listener per il ridimensionamento della finestra
      window.addEventListener('resize', this.updateImages);
    } catch (error) {
      console.error('Errore durante la chiamata API:', error);
    }
  },
  methods: {
    startSlideshow() {
      if (this.currentImages.length === 0) return; // Evita slideshow vuoti
      this.interval = setInterval(() => {
        this.currentImage = (this.currentImage + 1) % this.currentImages.length;
      }, 3000); // Cambia immagine ogni 3 secondi
    },
    stopSlideshow() {
      clearInterval(this.interval);
    },

    // Funzione per aggiornare le immagini in base alla larghezza dello schermo
    updateImages() {
      this.currentImages = window.innerWidth <= 768 ? this.imagesMobile : this.imagesDesktop;
    }
  },
  beforeUnmount() {
    this.stopSlideshow(); // Ferma lo slideshow quando il componente viene distrutto
    window.removeEventListener('resize', this.updateImages); // Rimuovi il listener di ridimensionamento
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
  font-size: 4rem !important;
  font-weight: 200;
  font-family: 'SilkSerif', serif;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-overlay h2 {
  font-weight: 300;
  font-family: 'Forma DJR Text', sans-serif;
  letter-spacing: 6px;
  font-size: 1rem !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

h1, h2 {
  margin: 0;
}

h1 {
  font-size: 4rem !important;
  font-weight: 200;
  font-family: 'SilkSerif', serif;
  text-transform: uppercase;
}

h2 {
  font-weight: 300;
  font-family: 'Forma DJR Text', sans-serif;
  letter-spacing: 6px;
  font-size: 1rem !important;
}

@media (max-width: 768px) {
  .text-overlay h1{
    font-size: 55px !important;
  }
}
</style>
