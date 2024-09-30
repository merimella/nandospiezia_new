<template>
  <div class="container-fluid photo-gallery p-0">
    <div class="row g-0">
      <!-- Creiamo 9 div uguali disposti in 3 colonne per desktop e 2 colonne per mobile -->
      <div
        v-for="(post, index) in posts.slice(0, 9)"
        :key="`post-${post.id}`" 
        class="col-6 col-md-4 d-flex align-items-stretch gallery-item"
        @mouseenter="startHoverAnimation(index)" 
        @mouseleave="stopHoverAnimation(index)"
      >
        <!-- Aggiungiamo NuxtLink per il reindirizzamento basato sullo slug -->
        <NuxtLink :to="`/stories/${post.attributes.slug}`" class="image-container">
          <!-- Sequenza di immagini dalla galleria -->
          <img 
            v-for="(image, imgIndex) in post.attributes.gallery.data" 
            :key="imgIndex"
            :src="`http://localhost:1337${image.attributes.url}`" 
            class="img-fluid gallery-image" 
            alt="Gallery Image" 
            :class="{ 'active': imgIndex === currentImageIndex[index] }"
          />
          
          <!-- HomeGalleryTitle e Location -->
          <div class="info-container" :class="{ 'show': hoverIndex === index }">
            <h2>{{ post.attributes.homeGalleryTitle }}</h2>
            <p>{{ post.attributes.location }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>




<script>
import { gsap } from "gsap";

export default {
  name: "PhotoGallery",
  data() {
    return {
      posts: [], // Dati caricati da Strapi
      hoverIndex: null, // Tiene traccia del div su cui si passa il mouse
      currentImageIndex: [], // Tiene traccia dell'indice dell'immagine corrente per ogni div
      intervals: [] // Salviamo gli intervalli per ogni galleria
    };
  },
  mounted() {
    if (process.client) {
      this.fetchPostsData();
    }
  },
  beforeUnmount() {
    // Puliamo gli intervalli quando il componente viene distrutto
    this.clearAllIntervals();
  },
  methods: {
    async fetchPostsData() {
      try {
        const response = await fetch(
          'http://localhost:1337/api/posts?populate=gallery',
          {
            headers: {
              Authorization: `Bearer 98788d4aa362cc31587b9600529fd6314d219985bae8b0d15838b3e114f6611d6c718ea819da564042737ca93cc7c3434a3f840c05a26be22a4794bd73bd1fb3f0e764bef85d1ccc10cd780f6b280c98fe81e427eb62b44d2f47eb6cdce8c64c81501b7005ff128ef23545e8e10e7747359ccda6028a13777e406eaf3180b219`, // Sostituisci con la tua API Key
            }
          }
        );
        const data = await response.json();
        this.posts = data?.data || [];

        // Inizializziamo l'indice dell'immagine corrente per ogni div
        this.currentImageIndex = this.posts.map(() => 0);

        // Partiamo solo con la prima galleria in automatico
        this.startAutomaticAnimation(0);
      } catch (error) {
        console.error("Errore durante la chiamata API:", error);
      }
    },
    startAutomaticAnimation(index, speed = 2000) {
      const totalImages = this.posts[index].attributes.gallery.data.length;
      const interval = setInterval(() => {
        this.currentImageIndex[index] = (this.currentImageIndex[index] + 1) % totalImages;
      }, speed); // Cambia immagine ogni 2 secondi per default
      this.intervals[index] = interval; // Salviamo l'intervallo
    },
    startHoverAnimation(index) {
      // Ferma tutte le altre animazioni
      this.clearAllIntervals();

      // Iniziamo l'animazione solo all'hover, tranne per la prima galleria
      if (!this.intervals[index]) {
        this.startAutomaticAnimation(index, 1500); // Partenza più veloce dopo hover
      }
      this.hoverIndex = index;
      gsap.to(`.gallery-item:nth-child(${index + 1}) .gallery-image.active`, {
        scale: 1.1, // Effetto di zoom
        duration: 0.3,
        ease: "power3.out"
      });
    },
    stopHoverAnimation(index) {
      this.hoverIndex = null;
      gsap.to(`.gallery-item:nth-child(${index + 1}) .gallery-image.active`, {
        scale: 1, // Ritorniamo alla scala originale
        duration: 0.3,
        ease: "power3.out"
      });

      // Se si lascia l'hover, fermiamo l'animazione
      if (this.intervals[index]) {
        clearInterval(this.intervals[index]);
        this.intervals[index] = null;
      }
    },
    clearAllIntervals() {
      // Ferma tutte le animazioni delle gallerie
      this.intervals.forEach((interval, idx) => {
        if (interval) {
          clearInterval(interval);
          this.intervals[idx] = null;
        }
      });
    }
  }
};
</script>

<style scoped>
.photo-gallery {
  background: #ffffff;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  padding: 0; /* Rimuove lo spazio tra le immagini */
}

.image-container {
  position: relative;
  width: 100%;
  padding-bottom: 125%; /* Rapporto 4:5 (100/80 = 1.25, quindi padding-bottom 125%) */
}

.gallery-image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover; /* Garantisce che l'immagine si adatti al contenitore senza deformarsi */
  object-position: center;
  display: none;
  transition: transform 0.3s ease;
}

.gallery-image.active {
  display: block; 
}

.info-container {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 10;
}

.info-container.show {
  opacity: 1;
}

h2 {
  font-size: 1.5rem;
  margin: 0;
}

p {
  margin: 5px 0 0;
  font-size: 1rem;
}

/* Gestione del layout su desktop e mobile */
@media (min-width: 768px) {
  .gallery-item {
    flex-basis: 33.33%; /* Ogni immagine occuperà il 33.33% della larghezza su desktop (3 colonne) */
    max-width: 33.33%; /* Impedisce all'immagine di superare il 33.33% della larghezza */
  }
}

@media (max-width: 768px) {
  .gallery-item {
    flex-basis: 50%; /* Ogni immagine occuperà il 50% della larghezza su mobile (2 colonne) */
    max-width: 50%; /* Impedisce all'immagine di superare il 50% della larghezza */
    padding: 0; /* Rimuove qualsiasi padding */
  }
  
  .image-container {
    padding-bottom: 125%; /* Mantiene il rapporto d'aspetto 4:5 su mobile */
  }
  
  .gallery-image {
    height: 100%;
    width: 100%;
  }
}

</style>
