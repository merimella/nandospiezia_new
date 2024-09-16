<template>
  <div class="header-conten-2">
    <div class="frame-12">
      <div class="text-container">
        <div class="h-2-wrapper"><h2 class="h-2">YOUR</h2></div>
        <div class="h-22-wrapper"><h2 class="h-22">BEST</h2></div>
        <div class="h-23-wrapper"><h2 class="h-23">MEMORIES</h2></div>
      </div>
    </div>
    <div class="img-scroll-left">
      <img class="img-1" src="/public/images/img-10.png" />
      <img class="img-2" src="/public/images/img-20.png" />
      <img class="img-3" src="/public/images/img-30.png" />
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "HeaderConten2",
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    // Animate each div from right to left
    gsap.from(".h-2-wrapper", {
      x: 200, // Start from the right
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".header-conten-2",
        start: "top 80%", // Trigger earlier for better effect
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });

    gsap.from(".h-22-wrapper", {
      x: 200,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".header-conten-2",
        start: "top 60%", // Sequential animation
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });

    gsap.from(".h-23-wrapper", {
      x: 200,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".header-conten-2",
        start: "top 40%", // Sequential animation
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });

    // Animate the images scrolling left and going under the text
    gsap.to(".img-scroll-left", {
      x: -700,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".header-conten-2",
        start: "top top", // Start the image scroll
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });
  },
};
</script>

<style scoped>
.header-conten-2,
.header-conten-2 * {
  box-sizing: border-box;
}
.header-conten-2 {
  background: #ffffff;
  padding: 171px 125px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 1024px;
  position: relative;
  overflow: hidden;
}
.frame-12 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: transparent; /* Transparent background */
  position: relative;
  z-index: 10; /* Higher z-index to ensure the text is above the images */
}
.text-container {
  display: flex;
  flex-direction: column;
  gap: 0; /* Remove vertical gaps between the divs */
}
.h-2-wrapper, .h-22-wrapper, .h-23-wrapper {
   /* White background to ensure text is visible */
  z-index: 11; /* Higher z-index to ensure text is above the images */
  position: relative;
  width: auto; /* Width is based on text content */
  height: auto; /* Height is based on text content */
  display: inline-block; /* Only take up as much space as the text */
}
.h-2, .h-22, .h-23 {
  font-family: "SilkSerif", sans-serif;
  font-size: 190px;
  font-weight: 100;
  color: #000;
  margin: 0;
  padding: 0;
  display: inline-block; /* Ensure the h2 behaves like text */
}
.img-scroll-left {
  position: absolute;
  left: 701px;
  top: 278px;
  width: 805px;
  height: 279px;
  display: flex;
  gap: 10px;
  z-index: 1; /* Lower z-index to ensure images go under text */
}
.img-scroll-left img {
  object-fit: cover;
}
</style>
