<template>
  <div class="container">
    <h1 class="text-start">GET IN TOUCH</h1>
    <form @submit.prevent="submitForm" class="mx-auto">
      <div class="row mb-3">
        <div class="col-sm-12">
          <input v-model="formData.fullname" type="text" class="form-control" placeholder="Nome Completo" id="fullname" required />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-12">
          <input v-model="formData.email" type="email" class="form-control" placeholder="Email" id="email" required />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-12">
          <input v-model="formData.phone" type="text" class="form-control" placeholder="Telefono" id="phone" required />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-12">
          <input v-model="formData.weddingdate" type="date" class="form-control" id="weddingdate" required />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-12">
          <input v-model="formData.weddingvenue" type="text" class="form-control" placeholder="Luogo Matrimonio" id="weddingvenue" required />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-12">
          <input v-model="formData.guestnumber" type="number" class="form-control" placeholder="Numero Ospiti" id="guestnumber" required />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-12">
          <textarea v-model="formData.yourrequest" class="form-control" placeholder="Richiesta" id="yourrequest" required></textarea>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-12">
          <select v-model="formData.selector" class="form-select" id="selector" required>
            <option value="" disabled selected>Come ci hai conosciuto?</option>
            <option value="Website">Website</option>
            <option value="Suggested by a Wedding Planner">Suggested by a Wedding Planner</option>
            <option value="Google">Google</option>
            <option value="Facebook">Facebook</option>
            <option value="Suggested by Location">Suggested by Location</option>
            <option value="Friends">Friends</option>
          </select>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-12">
          <div class="form-check">
            <input v-model="formData.privacypolicycheck" type="checkbox" class="form-check-input" id="privacypolicycheck" required />
            <label for="privacypolicycheck" class="form-check-label">Accetto la privacy policy</label>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-12">
          <button type="submit" class="btn btn-dark w-100">Invia</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

// Dati del form
const formData = ref({
  fullname: '',
  email: '',
  phone: '',
  weddingdate: '',
  weddingvenue: '',
  guestnumber: '',
  yourrequest: '',
  selector: '',
  privacypolicycheck: false
});

// Funzione di invio del form
const submitForm = async () => {
  try {
    await axios.post('https://nandospieziastrapi-production.up.railway.app/api/form-submissions', {
      data: formData.value,
    });
    alert('Form inviato con successo!');
  } catch (error) {
    console.error('Errore durante l\'invio del form:', error);
    alert('C\'è stato un errore durante l\'invio del form.');
  }
};
</script>

<style scoped>
.container {
  max-width: 1000px;
  padding-top: 50px;
}

form {
  padding: 20px 0;
}

h1 {
  font-size: 3rem; /* Titolo più grande */
  margin-bottom: 20px;
}

input, textarea, select {
  border-radius: 0; /* Rimuove gli angoli arrotondati */
}

textarea {
  height: 100px; /* Altezza textarea */
}

button {
  background-color: black !important; /* Sfondo del pulsante nero */
}
</style>
