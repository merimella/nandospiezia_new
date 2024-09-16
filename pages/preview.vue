<template>
  <div class="logo-loader-wrapper">
    <div class="logo-loader">
      <div class="rectangle">
        <div class="rectangle2"></div>
        <div class="rectangle2"></div>
        <div class="rectangle2"></div>
      </div>
      <img class="p" src="/images/loader-svg/p0.svg" />
      <img class="n" src="/images/loader-svg/n0.svg" />
      <img class="s" src="/images/loader-svg/s0.svg" />
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin"; // Per l'effetto slot machine

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default {
  name: "LogoLoader",
  mounted() {
    // Animazione ingresso rettangoli (dal basso verso l'alto)
    gsap.from(".rectangle2", {
      y: 300, // Parti dal basso
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      stagger: 0.2,
    });

    // Test per la lettera P con l'effetto di rimbalzo
    gsap.fromTo(
      ".p",
      {
        y: -400, // Parti da sopra
        opacity: 0,
      },
      {
        y: 0, // Posizione finale
        opacity: 1,
        duration: 2, // Durata animazione
        ease: "bounce.out", // Effetto rimbalzo
        delay: 0.5, // Leggero ritardo
      }
    );

    // Animazione per le altre lettere
    gsap.fromTo(
      ".n",
      {
        y: -400, 
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "elastic.out(1, 0.5)", // Rimbalzo elastico
        delay: 1, 
      }
    );

    gsap.fromTo(
      ".s",
      {
        y: -400, 
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "elastic.out(1, 0.5)", // Rimbalzo elastico
        delay: 1.5, 
      }
    );
  },
};
</script>




<style scoped>
.logo-loader-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Altezza 100% del viewport */
  width: 100vw;  /* Larghezza 100% del viewport */
  position: relative;
  overflow: hidden;
  background: #ffffff;
}

.logo-loader,
.logo-loader * {
  box-sizing: border-box;
}

.logo-loader {
  
  padding: 396px 447px 450px 447px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  height: 1024px;
  position: relative;
  overflow: hidden;
}

.rectangle {
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.rectangle2 {
  background: #000000;
  flex-shrink: 0;
  width: 178.58px;
  height: 178.58px;
  position: relative;
}

.p {
  flex-shrink: 0;
  width: 100.99px;
  height: 117.82px;
  position: absolute;
  left: 853px;
  top: 367px;
  z-index: 10; /* Aggiungi questo per dare priorità di visibilità */
  overflow: visible;
}

.n {
  flex-shrink: 0;
  width: 118.16px;
  height: 117.82px;
  position: absolute;
  left: 477px;
  top: 467px;
  overflow: visible;
}

.s {
  flex-shrink: 0;
  width: 102px;
  height: 122.87px;
  position: absolute;
  left: 669px;
  top: 424px;
  overflow: visible;
}

</style>
