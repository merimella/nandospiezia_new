<template>
  <div class="desktop-1">
    <div class="frame-7">
      <div class="close">CLOSE</div>
    </div>
    <div class="frame-4">
      <div class="faq">FAQ</div>
    </div>
    <div class="frame-6">
      <div class="logo">LOGO</div>
    </div>
    <div class="frame-1">
      <div class="memories">MEMORIES</div>
      <div class="home">HOME</div>
      <div class="stories">STORIES</div>
      <div class="about">ABOUT</div>
      <div class="contacts">CONTACTS</div>
    </div>
    <div class="frame-3">
      <div class="privacy-policy">PRIVACY POLICY</div>
      <div class="commercial-copyright">COMMERCIAL COPYRIGHT</div>
      <div class="creative-project">CREATIVE PROJECT</div>
    </div>
    <div class="frame-2">
      <div class="instagram">INSTAGRAM</div>
      <div class="pinterest">PINTEREST</div>
      <div class="facebook">FACEBOOK</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Desktop1",
  components: {},
  props: {},
  data() {},
};
</script>
<style scoped>
.desktop-1,
.desktop-1 * {
  box-sizing: border-box;
}
.desktop-1 {
  background: #ffffff;
  height: 1024px;
  position: relative;
  overflow: hidden;
}
.frame-7 {
  padding: 10px 0px 10px 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
  justify-content: flex-start;
  width: 38px;
  height: 121px;
  position: absolute;
  left: 1319px;
  top: 44px;
}
.close {
  color: #000000;
  text-align: left;
  font-family: "SilkSerif-Regular", sans-serif;
  font-size: 30px;
  font-weight: 400;
  position: relative;
  align-self: stretch;
  height: 38px;
  transform-origin: 0 0;
  transform: rotate(90deg) scale(1, 1);
}
.frame-4 {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
  justify-content: flex-end;
  height: 65px;
  position: absolute;
  left: 1266px;
  top: 919px;
}
.faq {
  color: #000000;
  text-align: left;
  font-family: "SilkSerif-Regular", sans-serif;
  font-size: 30px;
  font-weight: 400;
  position: relative;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(1, 1);
}
.frame-6 {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: 69px;
  top: 44px;
}
.logo {
  color: #000000;
  text-align: left;
  font-family: "SilkSerif-Regular", sans-serif;
  font-size: 30px;
  font-weight: 400;
  position: relative;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(1, 1);
}
.frame-1 {
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: center;
  justify-content: center;
  width: 430px;
  position: absolute;
  left: calc(50% - 215px);
  top: calc(50% - 227px);
}
.memories {
  color: #000000;
  text-align: left;
  font-family: "SilkSerif-Regular", sans-serif;
  font-size: 60px;
  font-weight: 400;
  position: relative;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(1, 1);
}
.home {
  color: #000000;
  text-align: left;
  font-family: "SilkSerif-Regular", sans-serif;
  font-size: 60px;
  font-weight: 400;
  position: relative;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(1, 1);
}
.stories {
  color: #000000;
  text-align: left;
  font-family: "SilkSerif-Regular", sans-serif;
  font-size: 60px;
  font-weight: 400;
  position: relative;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(1, 1);
}
.about {
  color: #000000;
  text-align: left;
  font-family: "SilkSerif-Regular", sans-serif;
  font-size: 60px;
  font-weight: 400;
  position: relative;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(1, 1);
}
.contacts {
  color: #000000;
  text-align: left;
  font-family: "SilkSerif-Regular", sans-serif;
  font-size: 60px;
  font-weight: 400;
  position: relative;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(1, 1);
}
.frame-3 {
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: flex-end;
  justify-content: flex-start;
  position: absolute;
  left: 79px;
  top: 951px;
}
.privacy-policy {
  color: #000000;
  text-align: left;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 13px;
  font-weight: 400;
  position: relative;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(1, 1);
}
.commercial-copyright {
  color: #000000;
  text-align: left;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 13px;
  font-weight: 400;
  position: relative;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(1, 1);
}
.creative-project {
  color: #000000;
  text-align: left;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 13px;
  font-weight: 400;
  position: relative;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(1, 1);
}
.frame-2 {
  display: flex;
  flex-direction: row;
  gap: 21px;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: calc(50% - 103px);
  top: 734.92px;
}
.instagram {
  color: #000000;
  text-align: left;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 10px;
  font-weight: 400;
  position: relative;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(1, 1);
}
.pinterest {
  color: #000000;
  text-align: left;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 10px;
  font-weight: 400;
  position: relative;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(1, 1);
}
.facebook {
  color: #000000;
  text-align: left;
  font-family: "WorkSans-Regular", sans-serif;
  font-size: 10px;
  font-weight: 400;
  position: relative;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(1, 1);
}
</style>
