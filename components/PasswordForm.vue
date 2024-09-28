<template>
  <div class="container d-flex align-items-center justify-content-center min-vh-100">
    <div class="row justify-content-center w-100">
      <div class="col-md-6 col-lg-4">
        <div class="card shadow-sm p-4">
          <h3 class="text-center mb-4">Pagina Protetta</h3>
          <p class="text-center">Inserisci la password per accedere al contenuto.</p>
          <form @submit.prevent="submitPassword">
            <div class="mb-3">
              <input 
                type="password" 
                v-model="password" 
                class="form-control" 
                placeholder="Password"
                required 
              />
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-black w-100">Accedi</button>
            </div>
          </form>
          <p v-if="errorMessage" class="text-danger text-center mt-3">{{ errorMessage }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'; // Non è necessario importare defineEmits

const emit = defineEmits(); // Definisci emit, non c'è bisogno di importarlo

const password = ref('');
const errorMessage = ref('');

const submitPassword = () => {
  if (password.value) {
    console.log('Password emessa:', password.value); // Log della password emessa
    emit('submit', password.value); // Emetti l'evento
  } else {
    errorMessage.value = 'Inserisci una password valida.';
  }
};
</script>

<style scoped>
.card {
  border-radius: 10px;
}

/* Imposta il pulsante nero */
.btn-black {
  background-color: #000;
  color: #fff;
  border: none;
}

.btn-black:hover {
  background-color: #333;
}

/* Centra il contenitore */
.container {
  min-height: 100vh;
}
</style>
