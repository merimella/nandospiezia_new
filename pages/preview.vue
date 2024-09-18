<template>
  <section class="section-1 container-fluid min-vh-100 d-flex align-items-center p-0">
    <!-- Il div row usa d-flex per mantenere l'altezza uguale tra le colonne -->
    <div class="container">
      <div class="row d-flex align-items-stretch">
        <!-- Colonna Sinistra: Titoli e Immagine -->
        <div class="img col-md-6 d-flex flex-column justify-content-center align-items-start py-5">
          <h2>about us</h2>
          <h1>
            ITALIAN EDITORIAL AND REPORTAGE <br />
            WEDDING PHOTOGRAPHERS
            <br />
            BASED IN NAPLES AND AMALFI COAST
          </h1>
          <div class="img-container">
            <img
              class="img-fluid bride-editorial-shooting-1"
              src="/images/Bride editorial shooting.jpg"
              alt="Bride editorial shooting"
            />
          </div>
        </div>
        <!-- Colonna Destra: Paragrafo e Pulsante centrati verticalmente -->
        <div class="testi col-md-6 d-flex flex-column justify-content-center align-items-start py-5">
          <p>
            
          The importance of wedding photography lies in its power to create timeless memories. <br><br>
          Long after the day has passed, your wedding photos will remain as a beautiful reminder of the day your souls became one. 
          At Nando Spiezia Photography, we follow your love story from sunrise to sunset, capturing the spontaneous simplicity and the invisible bond that unites you.<br><br>
          Our unique blend of reportage authenticity and editorial elegance ensures that every moment, big or small, is immortalized in stunning photographs.<br><br>

          </p>
          <div class="text-left">
            <button class="btn btn-link">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Section1",
};
</script>

<style scoped>
.section-1 {
  min-height: 100vh; /* Fa sì che la sezione occupi l'intera altezza dello schermo */
  display: flex;
  align-items: center; /* Centra verticalmente i contenuti */
  background-color: white;
}

.img-container {
  width: 100%;
  height: auto;
}

.img h1{
  margin-bottom: 30px;
}

.testi{
  margin-top: 200px;
}
.bride-editorial-shooting-1 {
  object-fit: cover;
  width: 100%;
  height: auto;
  max-height: 70vh; /* Limita l'altezza dell'immagine per evitare overflow */
}

@media only screen and (max-width: 600px) {
  .testi{
  margin-top: -60px;
}
.img{
  margin-top: 30px;
}
}

</style>
