<template>
  <div class="home-content-1">
    <div class="photo-container">
      <img class="img-1" src="/public/images/img-10.png" />
      <img class="img-2" src="/public/images/img-20.png" />
      <img class="img-3" src="/public/images/img-30.png" />
    </div>
    <div class="text-container">
      <h1 class="h-1">
        ITALIAN EDITORIAL AND REPORTAGE
        <br />
        WEDDING PHOTOGRAPHERS
        <br />
        BASED IN NAPLES AND AMALFI COAST
      </h1>
      <p class="p">
        The importance of wedding photography lies in its power to create
        timeless memories. Long after the day has passed, your wedding photos
        will remain as a beautiful reminder of the day your souls became one. At
        Nando Spiezia Photography, we follow your love story from sunrise to
        sunset, capturing the spontaneous simplicity and the invisible bond that
        unites you. Our unique blend of reportage authenticity and editorial
        elegance ensures that every moment, big or small, is immortalized in
        stunning photographs.
      </p>
      <div class="button">READ MORE</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeContent1",
  components: {},
  props: {},
  data() {},
};
</script>
<style scoped>
.home-content-1,
.home-content-1 * {
  box-sizing: border-box;
}
.home-content-1 {
  background: #ffffff;
  padding: 145px 181px 145px 181px;
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: center;
  height: 100vh;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  position: relative;
  overflow: hidden;
}
.photo-container {
  display: flex;
  flex-direction: row;
  gap: 19px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-shrink: 0;
  width: 514.66px;
  height: 661.12px;
  position: relative;
}
.img-1 {
  flex-shrink: 0;
  width: 515px;
  height: 279px;
  position: relative;
  object-fit: cover;
}
.img-2 {
  flex-shrink: 0;
  width: 239.99px;
  height: 169.4px;
  position: relative;
  object-fit: cover;
}
.img-3 {
  flex-shrink: 0;
  width: 255.67px;
  height: 363.12px;
  position: relative;
  object-fit: cover;
}
.text-container {
  background: #ffffff;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 37px;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 0;
  width: 539px;
  position: relative;
}
.h-1 {
  color: #000000;
  text-align: left;
  font-family: "EditorsNote-Regular", sans-serif;
  font-size: 25px;
  font-weight: 400;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.p {
  color: #000000;
  text-align: justified;
  font-family: "EditorsNote-Light", sans-serif;
  font-size: 18px;
  font-weight: 300;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
}
.button {
  color: #000000;
  text-align: right;
  font-family: "EditorsNote-Regular", sans-serif;
  font-size: 18px;
  font-weight: 400;
  text-decoration: underline;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
