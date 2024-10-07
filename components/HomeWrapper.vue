<template>
  <div class="container-fluid home-wrapper">
    <!-- Prima sezione -->
    <div class="section row mx-auto content-wrapper">
      <!-- Heading e immagine sulla stessa riga -->
      <div class="col-lg-6 order-lg-1">
        <div class="title">
          <h1 class="h1 split-text">
            ITALIAN EDITORIAL AND REPORTAGE
            
            WEDDING PHOTOGRAPHERS BASED
           
            IN NAPLES AND AMALFI COAST
          </h1>
        </div>
        <img class="img-fluid img-section fade-in-img" src="/images/homewrapper/img0.png" />
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
          <NuxtLink to="/about">
            <button class="btn btn-link">READ MORE</button>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Seconda sezione -->
    <div class="section">
      <div class="title">
        <div class="row text-center mx-auto content-wrapper">
          <div class="col">
            <h2 class="h2 split-text">Unforgettable</h2>
            <h1 class="h1 split-text">YOUR BEST MEMORIES</h1>
          </div>
        </div>
      </div>
      <!-- Galleria -->
      <div class="row justify-content-center mx-auto content-wrapper">
        <div class="col-12 d-flex flex-wrap justify-content-center">
          <img class="img-fluid gallery-item fade-in" src="/images/homewrapper/gallery-10.png" />
          <img class="img-fluid gallery-item fade-in" src="/images/homewrapper/gallery-20.png" />
          <img class="img-fluid gallery-item fade-in" src="/images/homewrapper/gallery-30.png" />
          <img class="img-fluid gallery-item fade-in" src="/images/homewrapper/gallery-40.png" />
          <img class="img-fluid gallery-item fade-in" src="/images/homewrapper/gallery-50.png" />
          <img class="img-fluid gallery-item fade-in" src="/images/homewrapper/gallery-60.png" />
          <img class="img-fluid gallery-item fade-in" src="/images/homewrapper/gallery-70.png" />
          <img class="img-fluid gallery-item fade-in" src="/images/homewrapper/gallery-80.png" />
          <img class="img-fluid gallery-item fade-in" src="/images/homewrapper/gallery-90.png" />
        </div>
      </div>
    </div>

    <!-- Terza sezione -->
    <div class="section row align-items-center mx-auto content-wrapper">
      <div class="title">
        <div class="row text-center mx-auto content-wrapper">
          <div class="col">
            <h2 class="h2 split-text">Your story, our lens</h2>
            <h1 class="h1 split-text">LOVE STORIES ARE AMONG <br />THE MOST BEAUTIFUL TALES EVER TOLD</h1>
          </div>
        </div>
      </div>
      <!-- Testi centrati sopra l'immagine -->
      <div class="col-lg-6 text-center text-lg-start order-lg-1">
        <img class="img-fluid img-rounded img-section rounded-top fade-in-img" src="/images/homewrapper/left-container.png" />
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
          <NuxtLink to="/contacts">
            <button class="btn btn-link">REQUEST A QUOTE</button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="home-gallery">
      <HomeGallery />
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
    this.$nextTick(() => {
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
    });
  },
};
</script>




<style scoped>
.home-wrapper {
  box-sizing: border-box;
  background-color: white;
  padding-top: 50px;
  padding-top: 80px;
}

.title{
  padding-bottom: 60px;
}

.section{
  padding-bottom: 180px;
}

.content-wrapper {
  max-width: 1350px;
  align-items: center; /* Centra verticalmente i paragrafi e le immagini */
}

.h2 {
  color: #000;
  font-weight: 400;
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



.img-section {
  height: auto;
  width: 100%; /* Assicura che l'immagine riempia completamente la colonna */
  aspect-ratio: 4/5; /* Imposta il rapporto di aspetto su 4:5 */
  object-fit: cover; /* Garantisce che l'immagine si adatti al contenitore senza deformarsi */
  padding: 0;
  margin: 0;
}


.img-rounded {
  border-top-left-radius: 50% !important; /* Arrotonda l'immagine */
  border-top-right-radius: 50% !important; /* Arrotonda l'immagine */
  object-fit: cover; /* Assicura che l'immagine si adatti al contenitore */
  object-position: center bottom; /* Fa partire il cover dell'immagine dal basso */
  width: 100%; /* Imposta la larghezza dell'immagine a 100% del contenitore */
  height: auto; /* Assicura che l'altezza si adatti proporzionalmente */
  overflow: hidden; /* Evita che l'immagine "sbordi" dal contenitore arrotondato */
}

.btn-link {
  font-size: 12px;
  color: #b4b4b4;
  text-decoration: none;
}
.home-gallery {
  display: flex; /* Imposta il layout a Flexbox */
  justify-content: center; /* Centra il contenuto orizzontalmente */
  align-items: center; /* (Facoltativo) Centra il contenuto verticalmente */
  width: 75%; /* Larghezza del contenitore */
  margin: 0 auto; /* Centra il contenitore stesso all'interno del genitore */
}


/* Media queries per i dispositivi mobili */
@media (max-width: 768px) {



 

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

  .home-gallery {
  display: flex; /* Imposta il layout a Flexbox */
  justify-content: center; /* Centra il contenuto orizzontalmente */
  align-items: center; /* (Facoltativo) Centra il contenuto verticalmente */
  width: 95%; /* Larghezza del contenitore */
  margin: 0 auto; /* Centra il contenitore stesso all'interno del genitore */
}


}

/* Layout della galleria su schermi piccoli */
@media (max-width: 768px) {



  .gallery-item {
    width: 100%; /* Default: singola immagine per riga */
  }

  /* Prima immagine grande (100%) */
  .gallery-item:nth-child(1) {
    width: 100%; /* Prima immagine occupa l'intera larghezza */
  }

  /* Seconda e terza immagine piccole affiancate al 50% */
  .gallery-item:nth-child(2),
  .gallery-item:nth-child(3) {
    width: 48%; /* Due immagini affiancate al 50% ciascuna */
    margin: 1%; /* Aggiunge un piccolo margine */
  }

  /* Quarta immagine grande (100%) */
  .gallery-item:nth-child(4) {
    width: 100%; /* Quarta immagine occupa l'intera larghezza */
  }

  /* Quinta e sesta immagine piccole affiancate al 50% */
  .gallery-item:nth-child(5),
  .gallery-item:nth-child(6) {
    width: 48%; /* Due immagini affiancate al 50% ciascuna */
    margin: 1%; /* Aggiunge un piccolo margine */
  }

  /* Settima immagine grande (100%) */
  .gallery-item:nth-child(7) {
    width: 100%; /* Settima immagine occupa l'intera larghezza */
  }

  /* Ottava e nona immagine piccole affiancate al 50% */
  .gallery-item:nth-child(8),
  .gallery-item:nth-child(9) {
    width: 48%; /* Due immagini affiancate al 50% ciascuna */
    margin: 1%; /* Aggiunge un piccolo margine */
  }
}


</style>
