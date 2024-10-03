<template>
  <div class="logo-loader-wrapper">
    <div class="logo-loader">
      <div class="rectangle">
        <div class="rectangle2">
          <img class="p" src="/public/images/loader-svg/n0.svg" />
        </div>
        <div class="rectangle2">
          <img class="n" src="/public/images/loader-svg/s0.svg" />
        </div>
        <div class="rectangle2">
          <img class="s" src="/public/images/loader-svg/p0.svg" />
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

    // Animazione delle immagini all'interno dei rettangoli
    gsap.from(this.$el.querySelectorAll(".rectangle2 img"), {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 1.5, // Parte dopo l'animazione dei rettangoli
      stagger: 0.2,
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
  position: relative;
  background: #000000;
  width: 50px;
  height: 50px;
}

.rectangle2 img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px; /* Regola la dimensione dell'immagine se necessario */
}

.percentage-counter {
  font-size: 24px;
  font-weight: bold;
}
</style>
