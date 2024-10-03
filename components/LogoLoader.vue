<template>
  <div class="logo-loader-wrapper">
    <div class="logo-loader">
      <div class="rectangle">
        <!-- Rettangolo con la lettera N -->
        <div class="rectangle2">
          <svg class="letter-n" width="50" height="50" viewBox="0 0 119 118" xmlns="http://www.w3.org/2000/svg">
            <path d="M79.4447 58.5736V0H118.157V117.82H89.2069L38.7124 59.2469V117.82H0V0H28.9502L79.4447 58.5736Z" fill="white"/>
          </svg>
        </div>
        <!-- Rettangolo con la lettera S -->
        <div class="rectangle2">
          <svg class="letter-s" width="50" height="50" viewBox="0 0 102 123" xmlns="http://www.w3.org/2000/svg">
            <path d="M52.0093 122.87C36.6366 122.87 24.1812 119.167 14.6434 111.761C5.10555 104.243 0.22442 93.1904 0 78.6031H38.5441C38.8808 88.8142 43.3692 93.9197 52.0093 93.9197C59.1908 93.9197 62.7815 91.395 62.7815 86.3456C62.7815 83.7647 61.3227 81.745 58.4053 80.2862C55.6 78.8275 50.8872 77.1443 44.2668 75.2368C35.9633 72.7682 29.0624 70.2995 23.5641 67.8309C18.0658 65.2501 13.2408 61.3227 9.08901 56.0489C5.04945 50.775 3.02967 43.8741 3.02967 35.3461C3.02967 28.3891 4.99334 22.2737 8.92069 16.9998C12.9603 11.6137 18.5708 7.46196 25.7522 4.5445C33.0458 1.51484 41.4055 0 50.8311 0C59.2469 0 67.1016 1.40262 74.3952 4.20787C81.8011 6.90091 87.8604 11.3893 92.5732 17.6731C97.3983 23.8446 99.8669 31.9798 99.9791 42.0787H62.9498C62.9498 38.3758 61.996 35.29 60.0884 32.8214C58.2931 30.2406 55.3195 28.9502 51.1677 28.9502C48.2503 28.9502 46.0061 29.6234 44.4351 30.9699C42.9764 32.3165 42.2471 34.1679 42.2471 36.5243C42.2471 39.1052 43.7058 41.1249 46.6232 42.5837C49.5407 44.0424 54.3096 45.7256 60.93 47.6331C69.2336 49.9895 76.0784 52.402 81.4644 54.8707C86.9627 57.3393 91.7317 61.2105 95.7712 66.4844C99.923 71.6461 101.999 78.4909 101.999 87.0188C101.999 93.4148 100.147 99.3619 96.4445 104.86C92.7415 110.246 87.131 114.622 79.613 117.989C72.0949 121.243 62.8937 122.87 52.0093 122.87Z" fill="white"/>
          </svg>
        </div>
        <!-- Rettangolo con la lettera P -->
        <div class="rectangle2">
          <svg class="letter-p" width="50" height="50" viewBox="0 0 101 118" xmlns="http://www.w3.org/2000/svg">
            <path d="M50.1579 0C59.9201 0 68.6164 1.68315 76.2467 5.04945C83.9891 8.41575 90.0485 13.2969 94.4247 19.6929C98.8009 25.9766 100.989 33.4386 100.989 42.0787C100.989 50.7189 98.8009 58.237 94.4247 64.6329C90.0485 70.9167 83.9891 75.7417 76.2467 79.108C68.6164 82.4743 59.9201 84.1575 50.1579 84.1575H40.3956V117.82H0V0H50.1579ZM46.4549 53.0192C50.7189 53.0192 53.973 52.0654 56.2172 50.1579C58.5736 48.1381 59.7518 45.445 59.7518 42.0787C59.7518 38.7124 58.5736 36.0755 56.2172 34.1679C53.973 32.1482 50.7189 31.1383 46.4549 31.1383H40.3956V53.0192H46.4549Z" fill="white"/>
          </svg>
        </div>
      </div>
      <div class="percentage-counter">0%</div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "LogoLoader",
  emits: ["loading-complete"],
  mounted() {
    const percentageCounter = this.$el.querySelector(".percentage-counter");

    // Animazione del counter dal 0% al 100%
    gsap.to({}, {
      duration: 3, // Durata del caricamento
      onUpdate: function () {
        const progress = Math.round(this.progress() * 100);
        percentageCounter.textContent = `${progress}%`;
      },
      onComplete: () => {
        // Emetti un evento per indicare che il caricamento è completato
        this.$emit("loading-complete");
      },
    });

    // Animazione dei rettangoli (dal basso verso l'alto)
    gsap.from(this.$el.querySelectorAll(".rectangle2"), {
      y: 300,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      stagger: 0.2,
    });

    // Animazione delle lettere SVG in entrata
    gsap.fromTo(".letter-n", {
      y: 300,
      opacity: 0,
    }, {
      y: 12, // Termina leggermente in basso
      opacity: 1,
      duration: 1.5,
      ease: "power4.out",
      delay: 1.2,
    });

    gsap.fromTo(".letter-s", {
      y: 300,
      opacity: 0,
    }, {
      y: 0, // Centrata
      opacity: 1,
      duration: 1.5,
      ease: "power4.out",
      delay: 1.5,
    });

    gsap.fromTo(".letter-p", {
      y: 300,
      opacity: 0,
    }, {
      y: -15, // Termina leggermente in alto
      opacity: 1,
      duration: 1.5,
      ease: "power4.out",
      delay: 1.8,
    });
  },
};
</script>

<style scoped>
/* Stili per il loader */
.logo-loader-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: #ffffff;
}

.logo-loader {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rectangle {
  display: flex;
  gap: 5px;
  margin-bottom: 20px;
}

.rectangle2 {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000;
  width: 50px;
  height: 50px;
}

.rectangle2 svg {
  width: 70%; /* Dimensioni leggermente ridotte */
  height: 70%;
}

.percentage-counter {
  font-size: 24px;
  font-weight: bold;
}
</style>
