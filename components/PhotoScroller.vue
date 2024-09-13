<template>
  <div class="fix-photo-scroll-container">
    <div class="fix-photo-scroll-container2"></div>
  </div>
</template>
<script>
export default {
  name: "FixPhotoScrollContainer",
  components: {},
  props: {},
  data() {},
};
</script>
<style scoped>
.fix-photo-scroll-container,
.fix-photo-scroll-container * {
  box-sizing: border-box;
}
.fix-photo-scroll-container {
  height: 5308px;
  position: relative;
}
.fix-photo-scroll-container2 {
  background: #d9d9d9;
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0%;
  left: 0%;
  bottom: 0%;
  top: 0%;
}
</style>
