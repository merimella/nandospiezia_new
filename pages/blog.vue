<template>
  <div class="blog-page">
    <!-- Cover Image Section -->
    <div class="cover-image-container">
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

    <!-- Scrolling Content Section -->
    <div class="content-container">
      <div v-for="post in posts" :key="post.id" class="post">
        <div class="text-container">
          <h2 ref="subtitle">{{ post.attributes.subtitle }}</h2>
          <!-- Render description as HTML content -->
          <p ref="description" v-html="post.attributes.description"></p>
        </div>

        <!-- Gallery Section -->
        <div v-if="post.attributes.gallery && post.attributes.gallery.data.length" class="gallery">
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
}

.cover-image-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin-bottom: -5px;
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  
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

h1 {
  font-size: 4rem;
  font-weight: bold;
}

.content-container {
  
  background-color: white;
  color: #111;
   /* To scroll content after the cover image */
}

.text-container {
  margin-bottom: 50px;
}

h2, h3, p {
  margin: 10px 0;
  
}

.gallery {
  display: flex;
  flex-wrap: wrap;
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
