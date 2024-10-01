<template>
  <div class="footer-form-wrapper bg-white">
    <div class="footer-form container p-4">
      <h2 class="text-start">Not ready with all the details?</h2>
      <p>
        Let us know your basic info, and we'll get back to you to discuss your wedding photography needs. 
        Or, if you're ready, you can 
        <NuxtLink to="/contacts">fill out the full form here</NuxtLink>.
      </p>
      <form @submit.prevent="submitFooterForm" class="mx-auto">
        <div class="row mb-3">
          <div class="col-sm-12">
            <input v-model="footerFormData.fullname" type="text" class="form-control" placeholder="Full Name" id="footer-fullname" required />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-sm-12">
            <input v-model="footerFormData.email" type="email" class="form-control" placeholder="Email" id="footer-email" required />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-sm-12">
            <!-- Placeholder personalizzato per la data -->
            <input v-model="footerFormData.weddingdate" type="date" class="form-control" id="footer-weddingdate" required placeholder="Wedding Date" onfocus="(this.type='date')" onblur="(this.type='text')" />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-sm-12">
            <button type="submit" class="btn btn-dark w-100">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRuntimeConfig } from 'nuxt/app'; // Importa useRuntimeConfig

// Dati del form semplificato
const footerFormData = ref({
  fullname: '',
  email: '',
  weddingdate: ''
});

// Ottieni la configurazione di runtime
const config = useRuntimeConfig();
const apiUrl = config.public.strapiApiUrl; // URL dell'API

// Funzione di invio del form semplificato
const submitFooterForm = async () => {
  try {
    await axios.post(`${apiUrl}/api/form-submissions`, { // Usa l'URL dell'API
      data: footerFormData.value,
    });
    alert('Your info has been sent successfully!');
  } catch (error) {
    console.error('Error sending the form:', error);
    alert('There was an error submitting your info.');
  }
};
</script>


<style scoped>
/* Wrapper per lo sfondo bianco */
.footer-form-wrapper {
  background-color: #ffffff; /* Sfondo bianco */
  padding: 50px 0; /* Spaziatura sopra e sotto */
}

/* Contenitore del form */
.footer-form {
  max-width: 800px; /* Aumentata la larghezza massima */
  margin: 0 auto;
}

h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

p {
  font-size: 1rem;
}

input, textarea {
  border-radius: 0;
}

button {
  background-color: black !important;
}
</style>
