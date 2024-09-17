<template>
  <div class="section-1">
    <div class="left">
      <h2 class="heading">
        <span>
          <span class="heading-span">about</span>
          <span class="heading-span2">●</span>
          <span class="heading-span3">us</span>
        </span>
      </h2>
      <h1 class="h-1">
        ITALIAN EDITORIAL AND REPORTAGE
        <br />
        WEDDING PHOTOGRAPHERS
        <br />
        BASED IN NAPLES AND AMALFI COAST
      </h1>
      <img class="img" src="/public/images/img-30.png" />
    </div>
    <div class="right">
      <p class="p">
        They narrate  the journey of two people who choose each other, no matter
        what.
        <br />
        At Nando Spiezia Photography, we believe every couple&#039;s journey is
        unique and deserves celebration. We capture the beauty and emotion of
        your love story, ensuring it is remembered and cherished forever. Our
        passion for wedding photography stems from the belief that love is the
        most profound emotion. Each love story is a tapestry of precious
        moments, shared dreams, and heartfelt promises. Using a blend of
        reportage and editorial photography, we create a visual narrative that
        showcases both grand and intimate moments, reflecting the true essence
        of your relationship.
        <br />
        Your wedding day is the culmination of your love story, and we ensure
        every photograph captures the emotions and moments that will be
        cherished for a lifetime. 
      </p>
      <div class="button">REQUEST A QUOTE</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Section1",
  components: {},
  props: {},
  data() {},
};
</script>
<style scoped>
.section-1,
.section-1 * {
  box-sizing: border-box;
}
.section-1 {
  background: #ffffff;
  padding: 79px 229px 79px 229px;
  display: flex;
  flex-direction: row;
  gap: 63px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  position: relative;
  overflow: hidden;
}
.left {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 0;
  width: 459.5px;
  position: relative;
}
.heading {
  color: #000000;
  text-align: left;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.heading-span {
  color: #000000;
  font-family: "MonsieurLaDoulaise-Regular", sans-serif;
  font-size: 46.94302749633789px;
  font-weight: 400;
}
.heading-span2 {
  color: #000000;
  font-family: "MonsieurLaDoulaise-Regular", sans-serif;
  font-size: 4.982875823974609px;
  font-weight: 400;
}
.heading-span3 {
  color: #000000;
  font-family: "MonsieurLaDoulaise-Regular", sans-serif;
  font-size: 46.94302749633789px;
  font-weight: 400;
}
.h-1 {
  color: #000000;
  text-align: left;
  font-family: "SilkSerif-Regular", sans-serif;
  font-size: 23.477012634277344px;
  font-weight: 400;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.img {
  align-self: stretch;
  flex-shrink: 0;
  height: 608px;
  position: relative;
  object-fit: cover;
}
.right {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-end;
  justify-content: flex-end;
  flex-shrink: 0;
  width: 460px;
  height: 502px;
  position: relative;
}
.p {
  color: #000000;
  text-align: justified;
  font-family: "SilkSerif-Regular", sans-serif;
  font-size: 16px;
  font-weight: 400;
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
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
