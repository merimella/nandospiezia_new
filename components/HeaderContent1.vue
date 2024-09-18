<template>
  <div class="ns-wrapper">
    <div class="ns-heading">
      <div class="left-container">
        <h2 class="h-2">about</h2>
        <h1 class="h-1">
          ITALIAN EDITORIAL AND REPORTAGE
          <br />
          WEDDING PHOTOGRAPHERS
          <br />
          BASED IN NAPLES AND AMALFI COAST
        </h1>
      </div>
      <div class="spacer-right"></div>
    </div>
    <div class="ns-section-1">
      <div class="left-container">
        <img class="img" src="\images\Bride editorial shooting.jpg" /> 
      </div>
      <div class="right-container">
        <div class="text-div">
          <p class="p">
            The importance of wedding photography lies in its power to create
            timeless memories. Long after the day has passed, your wedding
            photos will remain as a beautiful reminder of the day your souls
            became one. At Nando Spiezia Photography, we follow your love story
            from sunrise to sunset, capturing the spontaneous simplicity and the
            invisible bond that unites you. Our unique blend of reportage
            authenticity and editorial elegance ensures that every moment, big
            or small, is immortalized in stunning photographs.
          </p>
          <div class="button">READ MORE</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NsWrapper",
  components: {},
  props: {},
  data() {},
};
</script>
<style scoped>
.ns-wrapper,
.ns-wrapper * {
  box-sizing: border-box;
}
.ns-wrapper {
  background: #ffffff;
  padding: 150px 0px 50px 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.ns-heading {
  background: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: row;
  row-gap: 0px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}
.left-container {
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
  min-width: 350px;
  max-width: 900px;
  position: relative;
}
.h-2 {
  color: #000000;
  text-align: left;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.h-1 {
  color: #000000;
  text-align: left;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.spacer-right {
  margin: 0 0 0 -54px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
  height: 0px;
  min-width: 350px;
  max-width: 900px;
  position: relative;
  overflow: hidden;
}
.ns-section-1 {
  background: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: row;
  row-gap: 0px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}
.img {
  align-self: stretch;
  flex-shrink: 0;
  height: 1001px;
  position: relative;
  object-fit: cover;
}
.right-container {
  margin: 0 0 0 -54px;
  background: #ffffff;
  padding: 81px 51px 69px 51px;
  display: flex;
  flex-direction: column;
  gap: 43px;
  align-items: flex-end;
  justify-content: flex-start;
  flex: 1;
  min-width: 350px;
  max-width: 897px;
  position: relative;
}
.text-div {
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}
.p {
  color: #000000;
  text-align: justified;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
}
.button {
  color: #b4b4b4;
  text-align: right;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
