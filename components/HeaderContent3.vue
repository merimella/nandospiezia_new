<template>
  <div class="header-content-3">
    <div class="heading-content">
      <div class="heading-text">
        <h2 class="your-story-oru-lens split-links">
          <span>
            <span class="your-story-oru-lens-span">your story</span>
            <span class="your-story-oru-lens-span2">●</span>
            <span class="your-story-oru-lens-span3">oru lens</span>
          </span>
        </h2>
      </div>
      <div class="text-title">
        <h1 class="h-1 split-links">
          LOVE STORIES ARE AMONG
          THE MOST BEAUTIFUL TALES EVER TOLD
        </h1>
      </div>
    </div>
    <div class="paragraph">
       <p class="p split-links">
          The importance of wedding photography lies in its power to create
          timeless memories. Long after the day has passed, your wedding photos
          will remain as a beautiful reminder of the day your souls became one. At
          Nando Spiezia Photography, we follow your love story from sunrise to
          sunset, capturing the spontaneous simplicity and the invisible bond that
          unites you. Our unique blend of reportage authenticity and editorial
          elegance ensures that every moment, big or small, is immortalized in
          stunning photographs.
        </p>
    </div>
    <div class="button split-links">REQUEST A QUOTE</div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(SplitText, ScrollTrigger);

export default {
  mounted() {
    this.$nextTick(() => {
      this.animateTextOnScroll();
    });
  },
  methods: {
    animateTextOnScroll() {
      const splitH2 = new SplitText(".your-story-oru-lens", { type: "lines", linesClass: "lineChild" });
      new SplitText(".your-story-oru-lens", { type: "lines", linesClass: "lineParent" });

      const splitH1 = new SplitText(".h-1", { type: "lines", linesClass: "lineChild" });
      new SplitText(".h-1", { type: "lines", linesClass: "lineParent" });

      const splitButton = new SplitText(".button", { type: "lines", linesClass: "lineChild" });
      new SplitText(".button", { type: "lines", linesClass: "lineParent" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".header-content-3",
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1, // Sincronizza l'animazione con lo scroll
          toggleActions: "play none none none", // Rimosso play reverse
        },
        yoyo: true, // Effetto yoyo
      });

      tl.from(splitH2.lines, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.1,
      });

      tl.from(splitH1.lines, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.1,
      }, "-=1.2");

      // Anima il paragrafo come blocco unico, senza dividerlo in righe
      tl.from(".p", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      }, "-=1.2");

      tl.from(splitButton.lines, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.1,
      }, "-=1.2");
    }
  }
};
</script>


<style scoped>
.lineParent {
  overflow: hidden;
}

.split-links {
  overflow: hidden;
}
.header-content-3,
.header-content-3 * {
  box-sizing: border-box;
}
.header-content-3 {
  background: #ffffff;
  padding: 95px 247px 95px 247px;
  display: flex;
  flex-direction: column;
  gap: 23px;
  align-items: center;
  justify-content: center;
  height: 110vh;
  position: relative;
  overflow: hidden;
}
.heading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}
.heading-text {
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}
.your-story-oru-lens {
  color: #000000;
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.your-story-oru-lens-span {
  color: #000000;
  font-family: "Monsieur La Doulaise", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 40px;
}
.your-story-oru-lens-span2 {
  color: #000000;
  font-family: "Monsieur La Doulaise", cursive;
  font-weight: 400;
  font-style: normal;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 10px;
}
.your-story-oru-lens-span3 {
  color: #000000;
  font-family: "Monsieur La Doulaise", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 40px;
}
.text-title {
  margin: -7px 0 0 0;
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}
.h-1 {
  color: #000000;
  text-align: center;
  font-family: "SilkSerif-Regular", sans-serif;
  font-size: 36.24186706542969px;
  font-weight: 400;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.paragraph {
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}
.p {
  color: #000000;
  text-align: justified;
  font-family: "SilkSerif-Regular", sans-serif;
  font-size: 24px;
  font-weight: 400;
  position: relative;
  width: 925px;
  display: flex;
  align-items: center;
}
.button {
  color: #000000;
  font-family: "Noto Serif", serif;
  font-size: 18px;
  font-weight: 400;
  text-decoration: underline;
}
</style>
