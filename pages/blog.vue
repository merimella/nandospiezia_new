<template>
  <div class="blog-page">
    <!-- Cover Image Section -->
    <div ref="coverSection" class="cover-image-container full-page">
      <img 
        v-if="posts.length && posts[0].attributes.image && posts[0].attributes.image.data" 
        :src="`http://localhost:1337${posts[0].attributes.image.data.attributes.url}`" 
        alt="Cover Image"
        class="cover-image"
      />
      <div class="overlay-text">
        <h1 ref="title">{{ posts[0].attributes.title }}</h1>
      </div>
    </div>

    <!-- Full-page Subtitle and Description Section -->
    <div v-for="post in posts" :key="post.id">
      <div ref="contentSection" class="content-container full-page">
        <div class="text-container">
          <h4 ref="heading">{{ post.attributes.heading }}</h4>
          <h2 ref="subtitle">{{ post.attributes.subtitle }}</h2>
          <p ref="description">{{ post.attributes.description }}</p>
        </div>
      </div>

      <!-- Full-page Gallery Section -->
      <div ref="gallerySection" class="gallery-container full-page" v-if="post.attributes.gallery && post.attributes.gallery.data.length">
        <div class="gallery">
          <div v-for="image in post.attributes.gallery.data" :key="image.id" class="gallery-image">
            <img :src="`http://localhost:1337${image.attributes.url}`" alt="Gallery Image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const { data } = await useAsyncData('posts', () => $fetch('http://localhost:1337/api/posts?populate=*', {
  headers: {
    Authorization: `Bearer 98788d4aa362cc31587b9600529fd6314d219985bae8b0d15838b3e114f6611d6c718ea819da564042737ca93cc7c3434a3f840c05a26be22a4794bd73bd1fb3f0e764bef85d1ccc10cd780f6b280c98fe81e427eb62b44d2f47eb6cdce8c64c81501b7005ff128ef23545e8e10e7747359ccda6028a13777e406eaf3180b219`
  }
}));

const posts = data.value?.data || [];

const title = ref(null);
const subtitle = ref(null);
const description = ref(null);
const coverSection = ref(null);
const contentSection = ref(null);
const gallerySection = ref(null);

onMounted(() => {
  // Animate title and subtitle
  const splitTitle = new SplitText(title.value, { type: "chars, words" });
  gsap.from(splitTitle.chars, {
    scrollTrigger: {
      trigger: title.value,
      start: "top 80%",
      end: "top 20%",
      scrub: true
    },
    opacity: 0,
    y: 50,
    stagger: 0.05
  });

  gsap.from(subtitle.value, {
    scrollTrigger: {
      trigger: subtitle.value,
      start: "top 80%",
      end: "top 30%",
      scrub: true
    },
    opacity: 0,
    y: 50
  });

  // Create stacked pinning effect
  ScrollTrigger.create({
    trigger: coverSection.value,
    pin: true,
    pinSpacing: false,  // Disable extra space after pinning
    start: "top top",
    end: "+=100%",      // Duration of pinning
    scrub: true,
    markers: true
  });

  ScrollTrigger.create({
    trigger: contentSection.value,
    pin: true,
    pinSpacing: false,
    start: "top top",
    end: "+=100%",
    scrub: true,
    markers: true
  });

  ScrollTrigger.create({
    trigger: gallerySection.value,
    pin: true,
    pinSpacing: false,
    start: "top top",
    end: "+=100%",
    scrub: true,
    markers: true
  });

  // Animate gallery images
  gsap.utils.toArray('.gallery-image').forEach((image) => {
    gsap.from(image, {
      scrollTrigger: {
        trigger: image,
        start: "top 90%",
        end: "top 50%",
        scrub: true
      },
      opacity: 0,
      y: 100,
    });
  });
});
</script>

<style scoped>
.blog-page {
  width: 100%;
  height: 100%;
  position: relative;
}

.full-page {
  height: 100vh; /* Full page height */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.cover-image-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

.content-container {
  background-color: white;
  color: #111;
}

.text-container {
  text-align: center;
  max-width: 800px;
  padding: 20px;
}

h1 {
  font-size: 4rem;
  font-weight: 500;
  font-family: 'SilkSerif', serif;  /* Utilizzo del font definito in fonts.css */
}

h2 {
  margin: 0;
  font-size: 3rem;
  font-weight: 400;
  font-family: 'Forma DJR Display', sans-serif; /* Utilizzo del font definito in fonts.css */
}


h4{
  font-weight: 500;
  font-family: 'Forma DJR Display', sans-serif;
}

p {
  font-size: 1.5rem;
  margin-top: 20px;
  font-weight: 300;
  font-family: 'Forma DJR Text', sans-serif;
}

.gallery-container {
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gallery {
  display: flex;
}

.gallery-image {
  width: 33.33%;
  padding: 10px;
}

.gallery-image img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
