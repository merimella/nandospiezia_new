<template>
  <div class="form-wrapper d-flex justify-content-center align-items-center">
    <div class="container bg-white p-5 rounded">
      <div class="row justify-content-start">
        <div class="col-12 mb-4">
          <h1 class="display-4 text-start h1-custom">GET</h1>
          <h1 class="display-4 text-start h1-custom h1-custom-space">IN TOUCH</h1>
        </div>
        <div class="col-12 mb-4">
          <p class="lead text-start">We will answer in the next 24 hours</p>
        </div>
        <div class="col-md-6 mb-3">
          <label for="fullName" class="form-label">Full Name</label>
          <input type="text" class="form-control" id="fullName" placeholder="Enter your name">
        </div>
        <div class="col-md-6 mb-3">
          <label for="email" class="form-label">E-Mail</label>
          <input type="email" class="form-control" id="email" placeholder="Enter your email">
        </div>
        <div class="col-md-6 mb-3">
          <label for="phone" class="form-label">Phone</label>
          <input type="text" class="form-control" id="phone" placeholder="Enter your phone number">
        </div>
        <div class="col-md-6 mb-3">
          <label for="weddingDate" class="form-label">Wedding Date</label>
          <input type="date" class="form-control" id="weddingDate">
        </div>
        <div class="col-md-6 mb-3">
          <label for="weddingVenue" class="form-label">Wedding Venue</label>
          <input type="text" class="form-control" id="weddingVenue" placeholder="Enter wedding venue">
        </div>
        <div class="col-md-6 mb-3">
          <label for="guestNumber" class="form-label">Guest Number</label>
          <input type="number" class="form-control" id="guestNumber" placeholder="Enter guest number">
        </div>
        <div class="col-12 mb-3">
          <label for="request" class="form-label">Your Request</label>
          <textarea class="form-control" id="request" rows="4" placeholder="Describe your request"></textarea>
        </div>
        <div class="col-12 mb-3">
          <label for="hearAboutUs" class="form-label">How Did You Hear About Us?</label>
          <select class="form-select" id="hearAboutUs">
            <option selected>Select an option</option>
            <option value="1">Google</option>
            <option value="2">Social Media</option>
            <option value="3">Word of Mouth</option>
          </select>
        </div>
        <div class="col-md-6 mb-3 d-flex align-items-center">
          <input class="form-check-input me-2" type="checkbox" id="privacyPolicy">
          <label class="form-check-label" for="privacyPolicy">I agree with the privacy policy</label>
        </div>
        <div class="col-12 text-center">
          <button type="submit" class="btn btn-dark">SEND</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
};
</script>

<style scoped>
.form-wrapper {
  min-height: 100vh;
  background-color: #ffffff; /* Sfondo bianco */
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background-color: #ffffff; /* Sfondo bianco del form */
}

button.btn-dark {
  width: 100%;
  padding: 10px;
}

h1.display-4 {
  font-family: "SilkSerif-Regular", sans-serif;
}

.h1-custom {
  font-size: 94px; /* Font size per gli h1 */
}

.h1-custom-space {
  margin-top: -40px; /* Spazio tra i due h1 aumentato di 5px */
}



p.lead {
  font-family: "NexaLight-Regular", sans-serif;
  margin-top: -50px;
  font-size: 25px;
}

.form-check-input {
  margin-top: 0;
}
</style>
