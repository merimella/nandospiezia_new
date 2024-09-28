<template>
  <div class="container-fluid home-wrapper">
    <!-- Prima sezione -->
    <div class="row py-5 mx-auto content-wrapper">
      <!-- Heading e immagine sulla stessa riga -->
      <div class="col-lg-6 order-lg-1">
       
        <h1 class="h1 split-text">
          ITALIAN EDITORIAL AND REPORTAGE
          <br />
          WEDDING PHOTOGRAPHERS
          <br />
          BASED IN NAPLES AND AMALFI COAST
        </h1>
        <img class="img-fluid img-section mt-4 fade-in-img" src="/public/images/homewrapper/img0.png" />
      </div>
      <!-- Paragrafo e pulsante a destra (verticalmente centrati) -->
      <div class="col-lg-6 d-flex flex-column justify-content-center order-lg-2">
        <div class="p-4 text-end paragraph-box">
          <p class="p">
            The importance of wedding photography lies in its power to create timeless memories. 
            Long after the day has passed, your wedding photos will remain as a beautiful reminder 
            of the day your souls became one. At Nando Spiezia Photography, we follow your love 
            story from sunrise to sunset, capturing the spontaneous simplicity and the invisible 
            bond that unites you. Our unique blend of reportage authenticity and editorial elegance 
            ensures that every moment, big or small, is immortalized in stunning photographs.
          </p>
          <button class="btn btn-link">READ MORE</button>
        </div>
      </div>
    </div>

    <!-- Seconda sezione -->
    <div class="row py-5 text-center mx-auto content-wrapper">
      <div class="col">
        <h2 class="h2 split-text">Unforgettable</h2>
        <h1 class="h1 split-text">YOUR BEST MEMORIES</h1>
      </div>
    </div>

    <!-- Galleria -->
    <div class="row justify-content-center py-3 mx-auto content-wrapper">
      <div class="col-12 d-flex flex-wrap justify-content-center">
        <img class="img-fluid gallery-item fade-in" src="/public/images/homewrapper/gallery-10.png" />
        <img class="img-fluid gallery-item fade-in" src="/public/images/homewrapper/gallery-20.png" />
        <img class="img-fluid gallery-item fade-in" src="/public/images/homewrapper/gallery-30.png" />
        <img class="img-fluid gallery-item fade-in" src="/public/images/homewrapper/gallery-40.png" />
        <img class="img-fluid gallery-item fade-in" src="/public/images/homewrapper/gallery-50.png" />
        <img class="img-fluid gallery-item fade-in" src="/public/images/homewrapper/gallery-60.png" />
        <img class="img-fluid gallery-item fade-in" src="/public/images/homewrapper/gallery-70.png" />
        <img class="img-fluid gallery-item fade-in" src="/public/images/homewrapper/gallery-80.png" />
        <img class="img-fluid gallery-item fade-in" src="/public/images/homewrapper/gallery-90.png" />
      </div>
    </div>

    <!-- Terza sezione -->
    <div class="row py-5 align-items-center mx-auto content-wrapper">
      <div class="row py-5 text-center mx-auto content-wrapper">
        <div class="col">
          <h2 class="h2 split-text">Your story, our lens</h2>
          <h1 class="h1 split-text">LOVE STORIES ARE AMONG THE MOST BEAUTIFUL TALES EVER TOLD</h1>
        </div>
      </div>
      <!-- Testi centrati sopra l'immagine -->
      <div class="col-lg-6 text-center text-lg-start order-lg-1">
        <img class="img-fluid img-section rounded-top mt-4 fade-in-img" src="/public/images/homewrapper/img1.png" />
      </div>
      <!-- Paragrafo e pulsante a destra (verticalmente centrati) -->
      <div class="col-lg-6 d-flex flex-column justify-content-center order-lg-2">
        <div class="p-4 text-end paragraph-box">
          <p class="p">
            They narrate the journey of two people who choose each other, no matter what. 
            At Nando Spiezia Photography, we believe every couple's journey is unique and deserves celebration. 
            We capture the beauty and emotion of your love story, ensuring it is remembered and cherished forever. 
            Our passion for wedding photography stems from the belief that love is the most profound emotion. 
            Using a blend of reportage and editorial photography, we create a visual narrative that showcases both 
            grand and intimate moments, reflecting the true essence of your relationship.
          </p>
          <button class="btn btn-link">READ MORE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default {
  name: "HomeWrapper",
  mounted() {
    // Split text animation per i titoli (escludi i paragrafi)
    const splitTextElems = document.querySelectorAll("h1.split-text, h2.split-text");
    splitTextElems.forEach((elem) => {
      const split = new SplitText(elem, { type: "lines" });
      gsap.from(split.lines, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });
    });

    // Animazione di fade-in per le immagini della galleria
    gsap.from(".fade-in", {
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".fade-in",
        start: "top 80%",
      },
    });

    // Animazione di fade-in per le immagini delle sezioni
    gsap.from(".fade-in-img", {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".fade-in-img",
        start: "top 80%",
      },
    });

    // Animazione di fade-in per i paragrafi giustificati
    gsap.from(".p", {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".p",
        start: "top 80%",
      },
    });
  },
};
</script>

<style scoped>
.home-wrapper {
  box-sizing: border-box;
  background-color: white;
  padding-top: 50px;
}

.content-wrapper {
  max-width: 1000px;
}

.h2 {
  color: #000;
  font-weight: 400;
}

.paragraph-box {
  margin-top: 200px;
  margin-left: -200px;
  background-color: white !important; /* Forzare il background bianco */
  z-index: 1000;
}

.h1 {
  color: #000;
  font-weight: 300;
  line-height: 1.5;
}

.p {
  font-size: 1.25rem;
  color: #000;
  text-align: justify; /* Testo giustificato */
}

.gallery-item {
  width: calc(33.333% - 10px);
  margin: 5px;
  object-fit: cover;
}

.img-fluid {
  object-fit: cover;
}

.img-section {
  height: 700px;
  object-fit: cover;
}

.btn-link {
  font-size: 12px;
  color: #b4b4b4;
  text-decoration: none;
}

/* Media queries per i dispositivi mobili */
@media (max-width: 768px) {
  .paragraph-box {
    margin-top: -70px; /* Resetta il margine superiore su mobile */
    margin-left: 0; /* Resetta il margine a sinistra su mobile */
    padding: 20px; /* Aggiunge padding ai lati per ridurre lo spazio del testo su mobile */
    background-color: white !important; /* Mantiene il background bianco su mobile */
    margin-left: 20px;
    margin-right: 20px;
  }

  .img-section {
    height: auto; /* Aggiusta l'altezza dell'immagine su mobile */
    margin-bottom: 20px; /* Aggiungi spazio tra l'immagine e il testo su mobile */
  }

  /* Aggiungere del padding ai lati per restringere l'area del testo */
  .p {
    padding-left: 10px; /* Riduci l'area di testo ai lati su mobile */
    padding-right: 10px;
    font-size: 1.1rem; /* Riduci leggermente la dimensione del font per migliorare la leggibilità su mobile */
  }
}
</style>
