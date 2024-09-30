<template>
    <div class="container-fluid photo-gallery p-0">
      <div class="row g-0">
        <div
          v-for="(post, index) in posts.slice(0, 9)"
          :key="`post-${post.id}`"
          class="col-6 col-md-4 d-flex align-items-stretch gallery-item"
          ref="galleryItems"
          @mouseenter="startHoverAnimation(index)"
          @mouseleave="stopHoverAnimation(index)"
        >
          <NuxtLink :to="`/stories/${post.attributes.slug}`" class="image-container">
            <img
              v-for="(image, imgIndex) in post.attributes.gallery.data"
              :key="imgIndex"
              :src="`http://localhost:1337${image.attributes.url}`"
              class="img-fluid gallery-image"
              alt="Gallery Image"
              :class="{ 'active': imgIndex === currentImageIndex[index] }"
            />
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
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  
  gsap.registerPlugin(ScrollTrigger);
  
  export default {
    name: "PhotoGallery",
    data() {
      return {
        posts: [],
        hoverIndex: null,
        currentImageIndex: [],
        intervals: [],
        animationStarted: false,
      };
    },
    mounted() {
      if (process.client) {
        this.fetchPostsData();
      }
    },
    updated() {
      if (!this.animationStarted) {
        this.animationStarted = true;
        this.animateGalleryImages();
      }
    },
    beforeUnmount() {
      this.clearAllIntervals();
    },
    methods: {
      async fetchPostsData() {
        const config = useRuntimeConfig();
        try {
          const response = await fetch(
            "http://localhost:1337/api/posts?populate=gallery",
            {
              headers: {
                Authorization: `Bearer ${config.public.strapiBearerKey}`,
              },
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
      animateGalleryImages() {
        this.$nextTick(() => {
          const galleryItems = this.$refs.galleryItems;
  
          // Fase 1: Animazione sequenziale verso l'alto
          const timeline = gsap.timeline({
            defaults: { duration: 1, ease: "power2.out" },
          });
  
          // Prima animazione in cui le immagini salgono una alla volta
          timeline
            .fromTo(
              galleryItems,
              { y: 300, scale: 0.8 }, // Sale da sotto e più piccolo
              { y: 0, scale: 1, stagger: 0.2 } // Sale una alla volta
            )
            .addPause(); // Aggiungi una pausa tra la fase 1 e 2
  
          // Fase 2: Tutte le immagini tornano insieme al loro posto
          timeline.to(galleryItems, {
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.inOut", // Tornano contemporaneamente al loro posto
          });
        });
      },
      startAutomaticAnimation(index, speed = 2000) {
        const totalImages = this.posts[index].attributes.gallery.data.length;
        const interval = setInterval(() => {
          this.currentImageIndex[index] =
            (this.currentImageIndex[index] + 1) % totalImages;
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
          ease: "power3.out",
        });
      },
      stopHoverAnimation(index) {
        this.hoverIndex = null;
        gsap.to(`.gallery-item:nth-child(${index + 1}) .gallery-image.active`, {
          scale: 1,
          duration: 0.3,
          ease: "power3.out",
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
      },
    },
  };
  </script>
  
  <style scoped>
  .photo-gallery {
    background: #ffffff;
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
  