<template>
  <div class="home-wrapper mt-5">
    <form>
      <!-- Titolo del form -->
      <div class="mb-4">
        <h1 class="display-4">GET</h1>
        <h1 class="display-4">IN TOUCH</h1>
      </div>

      <!-- Full Name -->
      <div class="mb-3">
        <label for="fullName" class="form-label">Full Name</label>
        <input type="text" class="form-control" id="fullName" placeholder="Enter your full name">
      </div>

      <!-- E-Mail -->
      <div class="mb-3">
        <label for="email" class="form-label">E-Mail</label>
        <input type="email" class="form-control" id="email" placeholder="Enter your email">
      </div>

      <!-- Phone -->
      <div class="mb-3">
        <label for="phone" class="form-label">Phone</label>
        <input type="tel" class="form-control" id="phone" placeholder="Enter your phone number">
      </div>

      <!-- Wedding Date -->
      <div class="mb-3 position-relative">
        <label for="weddingDate" class="form-label">Wedding Date</label>
        <input type="date" class="form-control" id="weddingDate">
        <img src="/public/images/form-icon-selector0.svg" alt="Icon" class="position-absolute" style="right: 10px; top: 50%; transform: translateY(-50%);">
      </div>

      <!-- Wedding Venue -->
      <div class="mb-3">
        <label for="venue" class="form-label">Wedding Venue</label>
        <input type="text" class="form-control" id="venue" placeholder="Enter wedding venue">
      </div>

      <!-- Guest Number -->
      <div class="mb-3">
        <label for="guestNumber" class="form-label">Guest Number</label>
        <input type="number" class="form-control" id="guestNumber" placeholder="Enter number of guests">
      </div>

      <!-- Your Request -->
      <div class="mb-3">
        <label for="request" class="form-label">Your Request</label>
        <textarea class="form-control" id="request" rows="4" placeholder="Enter your request"></textarea>
      </div>

      <!-- How Did You Hear About Us -->
      <div class="mb-3 position-relative">
        <label for="hearAboutUs" class="form-label">How Did You Hear About Us?</label>
        <select class="form-select" id="hearAboutUs">
          <option selected disabled>Select an option</option>
          <option value="1">Social Media</option>
          <option value="2">Friend/Referral</option>
          <option value="3">Search Engine</option>
        </select>
        <img src="/public/images/form-icon-selector1.svg" alt="Icon" class="position-absolute" style="right: 10px; top: 50%; transform: translateY(-50%);">
      </div>

      <!-- Privacy Policy -->
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="privacyPolicy">
        <label class="form-check-label" for="privacyPolicy">I agree with the privacy policy</label>
      </div>

      <!-- Submit Button -->
      <div class="d-grid gap-2">
        <button type="submit" class="btn btn-dark btn-block">SEND</button>
      </div>

      <!-- Subtitle -->
      <div class="mt-3 text-center">
        <p class="text-muted">We will answer in the next 24 hours</p>
      </div>
    </form>
  </div>
</template>

<script>

</script>

<style scoped>
.home-wrapper {
  box-sizing: border-box;
  background-color: white; /* Sfondo bianco */
  display: flex;
  justify-content: center; /* Centra orizzontalmente */
  align-items: center; /* Centra verticalmente */
  padding: 20px; /* Aggiungi un po' di padding per evitare che il form tocchi i bordi */
}

form {
  width: 100%;
  max-width: 1000px !important; /* Imposta la larghezza massima a 1440px */
  background-color: white;
  padding: 0px 50px;
  
}


</style>
