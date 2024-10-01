<template>
  <!-- Il form di contatto -->
  <div class="contact-form">
    
    <!-- Titolo -->
    <h1 class="contact-title">CONTACT US</h1>

    <!-- Sottotitolo -->
    <p class="contact-subtitle">
      WE WILL ANSWER IN THE NEXT 24 HOURS!
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
        <input type="tel" class="contact-form__input" required />
        <label class="contact-form__placeholder">PHONE</label>
      </div>
      

      <div class="contact-form-field">
        <input type="text" ref="weddingDate" class="contact-form__input wedding-date-input" @focus="openCalendar" readonly />
        <label class="contact-form__placeholder no-animation" @click="openCalendar">WEDDING DATE</label>
      </div>
    </div>

    <!-- Terza riga: Telefono e Wedding Venue -->
    <div class="contact-form-row">
      <div class="contact-form-field">
        <input type="text" class="contact-form__input" required />
        <label class="contact-form__placeholder">WEDDING VENUE</label>
      </div>

      <div class="contact-form-field">
        <input type="number" class="contact-form__input" required />
        <label class="contact-form__placeholder">GUEST NUMBER</label>
      </div>
    </div>

    <!-- Quarta riga: Numero ospiti e Richiesta -->
    <div class="contact-form-row">
     

      <div class="contact-form-field">
        <textarea class="contact-form__input contact-form__textarea" rows="4" required></textarea>
        <label class="contact-form__placeholder">YOUR REQUEST</label>
      </div>
    </div>

    <!-- Quinta riga: Come ci hai conosciuto -->
<!-- Dropdown personalizzato per "How did you hear about us" -->
<div class="contact-form-field">
  <div class="dropdown-container" @click="toggleDropdown">
    <div class="dropdown-trigger">
      <span>{{ selectedOption ? selectedOption : "How did you hear about us?" }}</span>
    </div>
    <div v-if="dropdownOpen" class="dropdown">
      <div class="dropdown-item" @click="selectOption('Website')">Website</div>
      <div class="dropdown-item" @click="selectOption('Suggested by a Wedding Planner')">Suggested by a Wedding Planner</div>
      <div class="dropdown-item" @click="selectOption('Google')">Google</div>
      <div class="dropdown-item" @click="selectOption('Facebook')">Facebook</div>
      <div class="dropdown-item" @click="selectOption('Suggested by Location')">Suggested by Location</div>
      <div class="dropdown-item" @click="selectOption('Friends')">Friends</div>
    </div>
  </div>
</div>



    <!-- Checkbox -->
    <div class="checkbox-container">
      <input type="checkbox" class="contact-form__checkbox" required />
      <label class="contact-form__checkbox-label">
        I consent for the information submitted above to be recorded and stored for the purposes of providing services relating to my inquiry. I agree that registration on or use of Nando Spiezia site constitutes agreement to its User Agreement & Privacy Policy.
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
  data() {
    return {
      dropdownOpen: false,  // Controlla se il dropdown è aperto o chiuso
      selectedOption: "",   // Memorizza l'opzione selezionata dal dropdown
    };
  },
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
    
    // Gestione del dropdown
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;  // Alterna lo stato del dropdown
    },
    selectOption(option) {
      this.selectedOption = option;  // Imposta l'opzione selezionata
      this.dropdownOpen = false;     // Chiude il dropdown
    },
  },
};

</script>






<style scoped>
/* Stili di base per il form */
.contact-form,.contact-section {
background: #ffffff;
padding: 80px;
display: flex;
flex-direction: column;
gap: 40px;
align-items: flex-start;
position: relative;

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
border-bottom: 1px solid #C2C2C2; /* Sostituzione degli SVG */
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
font-size: 1.2em;
color: #c2c2c2;
pointer-events: none;
}

.contact-form__placeholder.active {
top: -20px;
left: 0;
font-size: 0.9em;
color: #000;
}

/* Wedding Date senza animazione */
.no-animation {
top: 8px;
transform: none;
font-size: 1.2em;
color: #c2c2c2;
}
/* Wedding Date input modificato per sembrare un selettore piuttosto che un campo di testo */
.wedding-date-input {
  cursor: pointer; /* Indica che il campo è cliccabile */
  background-color: transparent; /* Rimuove qualsiasi colore di sfondo */
  border: none; /* Rimuove il bordo per evitare che sembri un input testuale */
  border-bottom: 1px solid #C2C2C2; /* Mantiene la linea inferiore */
  padding: 10px 0;
  font-size: 16px;
  outline: none; /* Rimuove il bordo di messa a fuoco */
}

/* Rimozione della linea di input durante il focus */
.wedding-date-input:focus {
  outline: none; /* Rimuove il bordo evidenziato durante il focus */
  box-shadow: none; /* Evita qualsiasi ombra di input */
  border-bottom: 1px solid #C2C2C2; /* Mantiene la linea inferiore */
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
}/* Stili personalizzati per Flatpickr, se necessario */

.flatpickr-input {
border: none;
border-bottom: 1px solid #C2C2C2!important;
padding: 10px 0;
font-size: 16px;
background-color: transparent;
outline: none;
width: 100%;
}

/* Sovrascrivi gli stili di .form-control */
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

/* Stili del link Nuxt */
.contact-subtitle a {
color: #007bff;
text-decoration: underline;
cursor: pointer;
}

.contact-subtitle a:hover {
color: #0056b3;
text-decoration: none;
}
.contact-form__textarea {
  resize: none;
}

select.contact-form__input {
  appearance: none;
  background-color: transparent;
  border-bottom: 1px solid #C2C2C2;
  padding: 10px 0;
  font-size: 16px;
  outline: none;
}

/* Stile per il dropdown personalizzato */
.dropdown-container {
  position: relative;
  cursor: pointer;
  width: 100%; /* Per garantire che il container si estenda al 100% del contenitore */
}

.dropdown-trigger {
  background: transparent;
  border-bottom: 1px solid #C2C2C2;
  padding: 10px 0;
  font-size: 16px;
  color: #666;
  min-width: 142px; /* Larghezza minima */
  width: auto; /* Permette al dropdown di adattarsi alla larghezza del contenuto */
  white-space: nowrap; /* Impedisce al testo di andare a capo */
}

.dropdown-trigger span {
  font-size: 16px;
}

.dropdown {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  position: absolute;
  text-align: left;
  top: 100%;
  z-index: 10;
  width: auto; /* Adattamento automatico alla lunghezza del contenuto */
  min-width: 142px; /* Mantieni la larghezza minima */
}

.dropdown-item {
  padding: 10px 0;
  cursor: pointer;
  white-space: nowrap; /* Assicura che il testo rimanga su una singola linea */
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}

</style>
