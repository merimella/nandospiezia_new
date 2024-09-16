<template>
  <div class="container-fluid home-content-1">
    <div class="row d-flex justify-content-center align-items-center text-only">
      <!-- Colonna testo -->
      <div class="col-12 d-flex flex-column justify-content-center align-items-center text-container">
        <h1 class="h-1 split-links">
          ITALIAN EDITORIAL AND REPORTAGE <br />WEDDING PHOTOGRAPHERS
          <br />
          BASED IN NAPLES AND AMALFI COAST
        </h1>
        <p class="split-links">
          The importance of wedding photography lies in its power to create
          timeless memories. Long after the day has passed, your wedding photos
          will remain as a beautiful reminder of the day your souls became one. At
          Nando Spiezia Photography, we follow your love story from sunrise to
          sunset, capturing the spontaneous simplicity and the invisible bond that
          unites you. Our unique blend of reportage authenticity and editorial
          elegance ensures that every moment, big or small, is immortalized in
          stunning photographs.
        </p>
        <div class="button split-links">READ MORE</div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(SplitText, ScrollTrigger);

export default {
  mounted() {
    this.$nextTick(() => {
      this.animateTextOnScroll();
    });
  },
  methods: {
    animateTextOnScroll() {
      const splitH1 = new SplitText(".h-1", { type: "lines", linesClass: "lineChild" });
      new SplitText(".h-1", { type: "lines", linesClass: "lineParent" });

      const splitButton = new SplitText(".button", { type: "lines", linesClass: "lineChild" });
      new SplitText(".button", { type: "lines", linesClass: "lineParent" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".text-container",
          start: "top 80%",
          end: "bottom 60%",
          scrub: false,
          yoyo: true,
          toggleActions: "play reverse play reverse",
        },
      });

      tl.from(splitH1.lines, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.1,
      });

      tl.from("p", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      }, "-=1.2");

      tl.from(splitButton.lines, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.1,
      }, "-=1.2");
    }
  }
};
</script>

<style scoped>
.lineParent {
  overflow: hidden;
}

.split-links {
  overflow: hidden;
}

.home-content-1 {
  background: #ffffff;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-container {
 
  display: flex;
  flex-direction: column;
  gap: 37px;
  width: 100%;
  text-align: center;
}

/* Stili per i testi */
.h-1 {
  color: #000000;
  font-family: "Silkserif", serif;
  font-size: 60px;
  font-weight: 500;
}

p {
  color: #000000;
  font-family: "Noto Serif", serif;
  font-size: 18px;
  font-weight: 300;
  width: 1200px;
}

.button {
  color: #000000;
  font-family: "Noto Serif", serif;
  font-size: 18px;
  font-weight: 400;
  text-decoration: underline;
}

/* Media query per schermi più grandi */
@media (min-width: 1200px) {
  .text-container {
    max-width: 100%;
    padding: 40px 120px; /* Maggior spazio ai lati sui schermi più grandi */
  }
}

/* Media query per mobile */
@media (max-width: 768px) {
  .text-container {
    text-align: center;
    max-width: 100%;
    padding: 20px;
  }
}
</style>
