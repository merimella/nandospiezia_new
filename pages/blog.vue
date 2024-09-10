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
    Authorization: `Bearer 54b84e77fadaffe240be5599ee40ce6a49204b95cfb8915aa6c13f688b28aad0bc5cf812b8f94a1dbf56217a0b75dfde504e8c3ada424bd621a02b5eaa4f3ffe751acfc3e39c891d15d6d97a343199acd72d009031a126ac9640ce5a2049060f9505f0520fd870ece5a1048e34aeeaa569903c0c99d582c17adbee70a8c6840b`
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
