<template>

    

    <!-- Il form di contatto -->
    <div class="contact-form">
    
      <!-- Titolo -->
    <h1 class="contact-title">Not ready with all the details?</h1>

    <!-- Sottotitolo -->
    <p class="contact-subtitle">
      Let us know your basic info, and we'll get back to you to discuss your wedding photography needs.
      Or, if you're ready, you can fill out the full form
      <NuxtLink to="/contacts">here</NuxtLink>.
    </p>
      <!-- Prima riga: Full Name e Email -->
      <div class="contact-form-row">
        <div class="contact-form-field">
          <input type="text" class="contact-form__input" required />
          <label class="contact-form__placeholder">FULL NAME</label>
        </div>

        <div class="contact-form-field">
          <input type="email" class="contact-form__input" required />
          <label class="contact-form__placeholder">EMAIL</label>
        </div>
      </div>

      <!-- Seconda riga: Wedding Date e City -->
      <div class="contact-form-row">
        <div class="contact-form-field">
        <input type="text" ref="weddingDate" class="contact-form__input wedding-date-input" @focus="openCalendar" readonly />
        <label class="contact-form__placeholder no-animation" @click="openCalendar">WEDDING DATE</label>
      </div>

        <div class="contact-form-field">
          <input type="text" class="contact-form__input" required />
          <label class="contact-form__placeholder">CITY</label>
        </div>
      </div>

      <!-- Checkbox -->
      <div class="checkbox-container">
        <input type="checkbox" class="contact-form__checkbox" required />
        <label class="contact-form__checkbox-label">
          I consent for the information submitted above to be recorded and stored for the purposes of providing services relating to my inquiry. I agree that registration on or use of the Bottega 53 site constitutes agreement to its User Agreement & Privacy Policy.
        </label>
      </div>

      <!-- Pulsante di invio -->
      <div class="contact-form-button">
        <button class="contact-form__submit">SEND</button>
      </div>
    </div>
 
</template>


<script>
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export default {
  name: "ContactForm",
  mounted() {
    const inputs = document.querySelectorAll(".contact-form__input");

    inputs.forEach((input) => {
      // Placeholder animato per i campi, eccetto il campo Wedding Date
      input.addEventListener("focus", function () {
        const label = this.closest(".contact-form-field").querySelector(".contact-form__placeholder:not(.no-animation)");
        if (label) label.classList.add("active");
      });

      input.addEventListener("blur", function () {
        const label = this.closest(".contact-form-field").querySelector(".contact-form__placeholder:not(.no-animation)");
        if (!this.value && label) {
          label.classList.remove("active");
        }
      });
    });

    // Inizializza Flatpickr per il campo Wedding Date
    flatpickr(this.$refs.weddingDate, {
      dateFormat: "d/m/Y", // Formato gg/mm/aaaa
      allowInput: true,    // Consente di digitare manualmente la data
      onChange: (selectedDates, dateStr, instance) => {
        // Nascondi il placeholder se una data è stata selezionata
        const label = this.$refs.weddingDate.closest(".contact-form-field").querySelector(".contact-form__placeholder");
        if (dateStr) {
          label.classList.add("active");
        } else {
          label.classList.remove("active");
        }
      }
    });
  },
  methods: {
    openCalendar() {
      // Forza il focus sul campo di data
      this.$refs.weddingDate.focus();
    },
  },
};



</script>






<style scoped>
/* Annulla il border-radius su iOS */
input,
textarea,
select {
  -webkit-appearance: none; /* Disabilita lo stile predefinito di iOS */
  -moz-appearance: none;
  appearance: none;
  border-radius: 0; /* Rimuovi il border-radius */
}

input:focus,
textarea:focus,
select:focus {
  outline: none; /* Rimuovi il contorno standard quando il campo è selezionato */
  box-shadow: none; /* Evita effetti di ombra su focus */
}

/* Stili di base per il form */
.contact-form, .contact-section {
  background: #ffffff;
  padding: 200px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: flex-start;
  position: relative;
  padding-bottom: 100px;
}

.contact-form-row {
  display: flex;
  width: 100%;
  gap: 20px; /* Spaziatura tra i campi nella stessa riga */
}

/* Campi di input */
.contact-form-field {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
}

.contact-form__input {
  width: 100%;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid #C2C2C2;
  font-size: 16px;
  background-color: transparent;
  outline: none;
}

.contact-form__placeholder {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  transition: all 0.3s ease;
  font-size: 1.1em;
  color: #c2c2c2;
  pointer-events: none;
}

.contact-form__placeholder.active {
  top: -20px;
  left: 0;
  font-size: 0.8em;
  color: #000;
}

/* Wedding Date senza animazione */
.no-animation {
  top: 8px;
  transform: none;
  font-size: 1.1em;
  color: #c2c2c2;
}

/* Checkbox */
.checkbox-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
}

.contact-form__checkbox {
  width: 15px;
  height: 15px;
}

.contact-form__checkbox-label {
  font-size: 12px;
  color: #000;
}

/* Pulsante di invio */
.contact-form-button {
  display: flex;
  align-items: center;
  gap: 10px;
}

.contact-form__submit {
  background: none;
  border: none;
  color: #c2c2c2;
  font-family: "PlayfairDisplay-Regular", sans-serif;
  font-size: 20px;
  cursor: pointer;
}

/* Stili personalizzati per Flatpickr */
.flatpickr-input {
  border: none;
  border-bottom: 1px solid #C2C2C2 !important;
  padding: 10px 0;
  font-size: 16px;
  background-color: transparent;
  outline: none;
  width: 100%;
}

.form-control {
  color: inherit;
  background-color: transparent;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
}

.form-control:focus {
  color: inherit;
  background-color: transparent;
  border-color: transparent;
  outline: none;
  box-shadow: none;
}

/* Titolo e sottotitolo */
.contact-title {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 10px;
  color: #000;
}

.contact-subtitle {
  font-size: 1.2em;
  color: #666;
  margin-bottom: 40px;
  line-height: 1.5;
  margin-top: -20px !important;
}

/* Media queries per dispositivi mobili */
@media (max-width: 768px) {
  .contact-form, .contact-section {
    background: #ffffff;
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: flex-start;
    position: relative;
    padding-top: 100px;
    padding-bottom: 20px;
  }

  /* Sovrascrivi gli stili di Flatpickr su mobile */
  .flatpickr-calendar {
    display: none !important; /* Nascondi il calendario su mobile se preferito */
  }

  .flatpickr-input {
    font-size: 14px; /* Adatta la dimensione del testo */
    border-bottom: 1px solid #C2C2C2;
    padding: 8px 0;
    background-color: transparent;
    border-color: #C2C2C2;
  }
}

</style>
