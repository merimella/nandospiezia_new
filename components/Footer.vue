<template>
  <div class="footer-container">
    <References />
    <div class="text-overlay">
      <h1>NANDO SPIEZIA</h1>
      <h2>PHOTOGRAPHY</h2>
    </div>
    <div class="footer-links">
      <div class="li">VIA GUGLIELMO MARCONI, 3</div>
      <div class="li">TORRE DEL GRECO (NA) - ITALY</div>
      <div class="li">INFO@NANDOSPIEZIA.COM</div>
      <div class="li">WWW.NANDOSPIEZIA.COM</div>
      <div class="li">+39 081 19516143 +39 334 1204000</div>
    </div>
    <div class="social-div">
      <img class="social-icon" src="/images/facebook-negative0.svg" alt="Facebook" />
      <img class="social-icon" src="/images/twitter-negative0.svg" alt="Twitter" />
      <img class="social-icon" src="/images/group0.svg" alt="Group" />
    </div>
    <div class="footer-claim">
      <div class="h-3">YOUR WEDDING, BEST LOVE TALE</div>
    </div>
  </div>
  <CustomFooter />
</template>

<style scoped>
.footer-container {
  box-sizing: border-box;
  background-color: white;
  z-index: 2;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin: 0;
  z-index: 2;
}

.footer-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: #000000;
  font-family: 'Nexa', sans-serif;
  font-size: 15px;
  text-align: center;
}

.social-div {
  display: flex;
  gap: 40px;
}

.social-icon {
  width: 28px;
  height: 28px;
  cursor: pointer;
}

.text-overlay {
  text-align: center;
  color: black;
}

h1 {
  font-size: 4rem !important;
  font-weight: 200;
  font-family: 'SilkSerif', serif;
  text-transform: uppercase;
  margin: 0;
}

h2 {
  font-weight: 300;
  font-family: 'Forma DJR Text', sans-serif;
  letter-spacing: 6px;
  font-size: 1rem !important;
  margin: 0;
}

.footer-claim {
  font-family: 'Nexa', sans-serif;
  font-size: 30px;
  text-align: center;
  color: #000;
}
</style>
