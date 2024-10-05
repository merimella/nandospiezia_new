<template>
  <Navbar />
  <div id="content" class="container-fluid home-wrapper">

  
    <!-- Prima sezione -->
    <div  class="section row mx-auto content-wrapper align-items-center">
      <div class="title">
      <h2>FAQ</h2>
          <h1 class="h1 split-text">
            MOST FREQUENTLY
            ASKED QUESTIONS
          </h1>
        </div>
      <!-- Heading e immagine sulla stessa riga -->
      <div class="col-lg-6 order-lg-1 d-flex align-items-center">
        
        <img
          class="img-fluid img-section fade-in-img"
          src="/public/images/faq/1.webp"
          alt="Nando Spiezia Photographer"
        />
      </div>

      <!-- Paragrafo e pulsante a destra (verticalmente centrati) -->
      <div class="col-lg-6 d-flex flex-column justify-content-center order-lg-2">
        <div class="p-4 paragraph-box">
          <h2>HOW MUCH DOES YOUR SERVICE COST?</h2>
          <p class="p">
            We offer various packages based on the duration of the service and the number of photographers needed. All packages can be customized to suit your needs! Fill out the form and we will respond within 24 hours.
          </p>
          <h2>HOW CAN I BOOK AND HOW FAR IN ADVANCE DO I NEED TO CONTACT YOU?</h2>
          <p class="p">
          The minimum notice, negotiation, and organization time depends on the date of the wedding. If the wedding is scheduled in the low season, 4-5 months may be sufficient. However, in the high season (July to September), it is not uncommon to need up to a year in advance.
          Weddings are confirmed only by contract and first deposit. We usually book each event 6-9 months in advance, so please contact us in time to check our availability immediately.
          </p>    
        </div>
      </div>
    </div>

    <!-- Seconda sezione -->
    <div  class="section row mx-auto content-wrapper align-items-center">
      <!-- Paragrafo a sinistra (verticalmente centrati) -->
      <div class="col-lg-6 d-flex flex-column justify-content-center order-lg-1">
        <div class="p-4 paragraph-box-left">
          <h2>WHAT TERRITORY DO YOU OPERATE IN? DO YOU ALSO WORK ABROAD?</h2>
          <p class="p">
            Within two months after your wedding, we will provide you with a selection of high-resolution JPEG photos. These will be available in a private online gallery for you to view and share. If you prefer to receive your photos sooner, you can opt for our FAST delivery service, which ensures you get your selection within 30 days of the wedding.
If your package includes an album, it will be ready for pickup at our studio or can be shipped to you within one month after the layout approval.
          </p>
          <h2>HOW MANY PHOTOGRAPHERS WILL I NEED FOR MY WEDDING?</h2>
          <p class="p">
            Yes, we offer a comprehensive wedding album service. We use high-quality materials and offer a range of customization options to ensure your album reflects your personal style and the unique story of your wedding.
          </p>    
        </div>
      </div>

      <!-- Immagine a destra -->
      <div class="col-lg-6 order-lg-2 d-flex align-items-center">
        <img
          class="img-fluid img-section fade-in-img"
          src="/public/images/faq/2.webp"
          alt="Nando Spiezia Photographer"
        />
      </div>
    </div>

    <!-- Terza sezione -->
    <div class="section row mx-auto content-wrapper align-items-center">
      <!-- Heading e immagine sulla stessa riga -->
      <div class="col-lg-6 order-lg-1 d-flex align-items-center">
        <img
          class="img-fluid img-section fade-in-img"
          src="/public/images/faq/3.webp"
          alt="Nando Spiezia Photographer"
        />
      </div>

      <!-- Paragrafo e pulsante a destra (verticalmente centrati) -->
      <div class="col-lg-6 d-flex flex-column justify-content-center order-lg-2">
        <div class="p-4 paragraph-box">
          <h2>WHEN AND HOW WILL YOU RECIVE THE PHOTOS? AND HOW DOU YOU HANDLE THE IMAGES? </h2>
          <p class="p">
            Yes, we do offer additional services. If desired, we can be present at your engagement party, brunch, and rehearsal. These events are great opportunities to become comfortable in front of the camera, build a rapport with us, and see our working style. For pre-wedding shoots, we offer special sessions with a unique style that we choose together.
          </p>
          <h2>DO YOU OFFER A WEDDING ALBUM SERVICE?</h2>
          <p class="p">
            Absolutely, we can recommend a wedding filmmaker who aligns perfectly with our style and storytelling approach. We collaborate with some of the best professionals in the industry to ensure your wedding video beautifully complements our photographic work
          </p>    
        </div>
      </div>
    </div>


        <!-- Quarta sezione -->
        <div class="section row mx-auto content-wrapper align-items-center">
      <!-- Paragrafo a sinistra (verticalmente centrati) -->
      <div class="col-lg-6 d-flex flex-column justify-content-center order-lg-1">
        <div class="p-4 paragraph-box-left">
          <h2>DO YOU OFFER ADDITIONAL SERVICES, SUCH AS ENGAGEMENT PARTY OR PREWEDDING?</h2>
          <p class="p">
            Yes, we do offer additional services. If desired, we can be present at your engagement party, brunch, and rehearsal. These events are great opportunities to become comfortable in front of the camera, build a rapport with us, 
            and see our working style. For pre-wedding shoots, we offer special sessions with a unique style that we choose together.
          </p>
          <h2>CAN YOU HELP US FIND A VIDEOGRAPHY SERVICE?</h2>
          <p class="p">
            Absolutely, we can recommend a wedding filmmaker who aligns perfectly with our style and storytelling approach. 
            We collaborate with some of the best professionals in the industry to ensure your wedding video beautifully complements our photographic work
          </p>    
        </div>
      </div>

      <!-- Immagine a destra -->
      <div class="col-lg-6 order-lg-2 d-flex align-items-center">
        <img
          class="img-fluid img-section fade-in-img"
          src="/public/images/faq/4.webp"
          alt="Nando Spiezia Photographer"
        />
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

.section{
  padding-bottom: 180px;
}

.home-wrapper {
  box-sizing: border-box;
  background-color: white;
  padding-top: 50px;
  padding-top: 80px;
}

.title{
  padding-bottom: 60px;
}



.content-wrapper {
  max-width: 1350px;
  align-items: center; /* Centra verticalmente i paragrafi e le immagini */
}

.container-fluid {
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
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

  .section{
    padding-bottom: 40px;
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

  .home-gallery {
    display: flex; /* Imposta il layout a Flexbox */
    justify-content: center; /* Centra il contenuto orizzontalmente */
    align-items: center; /* (Facoltativo) Centra il contenuto verticalmente */
    width: 95%; /* Larghezza del contenitore */
    margin: 0 auto; /* Centra il contenitore stesso all'interno del genitore */
  }
  h1{
    font-size: 20px!important;
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
