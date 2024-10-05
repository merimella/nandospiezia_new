<template>
  <Navbar />
  <div id="content" class="container-fluid home-wrapper">
    <!-- Prima sezione -->
    <div  class="row mx-auto content-wrapper">
      <!-- Heading e immagine sulla stessa riga -->
      <div class="col-lg-6 order-lg-1">
        <div class="title">
          <h2>ABOUT</h2>
          <h1 class="h1 split-text">
            BORN TO GIVE EMOTIONS
            <br />
            THROUGH A TIMELESS STORYTELLING
          </h1>
        </div>
        <img
          class="img-fluid img-section fade-in-img"
          src="/public/images/Nando_Spiezia_Photographer.webp"
          alt="Nando Spiezia Photographer"
        />
      </div>

      <!-- Paragrafo e pulsante a destra (verticalmente centrati) -->
      <div class="col-lg-6 d-flex flex-column justify-content-center order-lg-2">
        <div class="p-4 text-end paragraph-box">
          <p class="p">
            Driven by a deep desire to discover and evoke emotions, wedding
            photography is a necessity for me. I am passionate about capturing
            the smallest details, the nuances that often go unnoticed. These
            details deserve to be immortalized, creating a connection with the
            world's stories. My approach aligns the head, eyes, and heart,
            making photography not just an art form but a way of life. Through
            my lens, I capture the essence of every moment, ensuring each photo
            tells a unique and compelling story. Whether it’s the candid laughter
            at a wedding or the tender glances between loved ones, my goal is to
            preserve these moments authentically.
          </p>
        </div>
      </div>
    </div>

    <!-- Seconda sezione -->
    <div class="section">
      <div class="row text-center mx-auto content-wrapper">
        <div class="col">
          <h1 class="h1 split-text">
            OUR APPROACH TO WEDDING PHOTOGRAPHY
          </h1>
        </div>
        <p class="p text-center">
          At Nando Spiezia Photography, we believe in capturing the beauty of
          every moment and transforming it into lasting memories...
        </p>
      </div>
    </div>

    <FooterForm />
    <Footer />
  </div>
</template>


<script>
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { nextTick } from "vue";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default {
  name: "HomeWrapper",
  mounted() {
    nextTick(() => {
      // Split text animation per i titoli (escludi i paragrafi)
      const splitTextElems = document.querySelectorAll("h1.split-text, h2.split-text");
      if (splitTextElems.length) {
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
      }

      // Animazione di fade-in per le immagini delle sezioni
      if (document.querySelector(".fade-in-img")) {
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
      }

      // Animazione di fade-in per i paragrafi giustificati
      if (document.querySelector(".p")) {
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
      }
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
  margin:0;
}

.title{
  padding-bottom: 60px;
}

.section{
  padding-bottom: 90px;
}

.content-wrapper {
  max-width: 1350px;
  
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

.container-fluid {
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
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
