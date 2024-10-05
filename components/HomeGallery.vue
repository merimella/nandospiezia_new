<template>
  <div class="container-fluid photo-gallery p-0">
    <!-- Titolo della sezione -->
    <div class="gallery-title text-center title">
      <h1>Your Best Day Deserves Best Memories</h1>
    </div>
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
            :src="`${apiUrl}${image.attributes.url}`" 
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
      posts: [],
      hoverIndex: null,
      currentImageIndex: [],
      intervals: []
    };
  },
  mounted() {
    if (process.client) {
      this.fetchPostsData();
    }
  },
  beforeUnmount() {
    this.clearAllIntervals();
  },
  methods: {
    async fetchPostsData() {
      try {
        // Ottieni la configurazione di runtime
        const config = useRuntimeConfig();
        this.apiUrl = config.public.strapiApiUrl; // Salva apiUrl nei dati per poterlo usare nel template
        const apiToken = config.public.strapiApiToken;

        // Usa this.apiUrl perché ora è nei dati del componente
        const response = await fetch(
          `${this.apiUrl}/api/posts?populate=gallery`,
          {
            headers: {
              Authorization: `Bearer ${apiToken}`, // Usa apiToken dalla configurazione di runtime
            }
          }
        );
        const data = await response.json();
        this.posts = data?.data || [];

        this.currentImageIndex = this.posts.map(() => 0);

        this.startAutomaticAnimation(0);
      } catch (error) {
        console.error("Errore durante la chiamata API:", error);
      }
    },
    startAutomaticAnimation(index, speed = 2000) {
      const totalImages = this.posts[index].attributes.gallery.data.length;
      const interval = setInterval(() => {
        this.currentImageIndex[index] = (this.currentImageIndex[index] + 1) % totalImages;
      }, speed);
      this.intervals[index] = interval;
    },
    startHoverAnimation(index) {
      this.clearAllIntervals();
      if (!this.intervals[index]) {
        this.startAutomaticAnimation(index, 1500);
      }
      this.hoverIndex = index;
      gsap.to(`.gallery-item:nth-child(${index + 1}) .gallery-image.active`, {
        scale: 1.1,
        duration: 0.3,
        ease: "power3.out"
      });
    },
    stopHoverAnimation(index) {
      this.hoverIndex = null;
      gsap.to(`.gallery-item:nth-child(${index + 1}) .gallery-image.active`, {
        scale: 1,
        duration: 0.3,
        ease: "power3.out"
      });

      if (this.intervals[index]) {
        clearInterval(this.intervals[index]);
        this.intervals[index] = null;
      }
    },
    clearAllIntervals() {
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

.title{
  padding-bottom: 60px;
}


.gallery-title h1 {
  
  font-weight: 400;
  text-transform: uppercase;
  color: #333;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  padding: 0;
}

.image-container {
  position: relative;
  width: 100%;
  padding-bottom: 125%; 
}

.gallery-image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
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

@media (min-width: 768px) {
  .gallery-item {
    flex-basis: 33.33%; 
    max-width: 33.33%; 
  }
}

@media (max-width: 768px) {
  .gallery-item {
    flex-basis: 50%; 
    max-width: 50%; 
    padding: 0; 
  }
  
  .image-container {
    padding-bottom: 125%; 
  }
  
  .gallery-image {
    height: 100%;
    width: 100%;
  }
}
</style>
