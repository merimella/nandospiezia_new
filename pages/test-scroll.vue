<template>
  <div class="wrapper">

    <section class="vertical">
      <h1>ciao capo</h1>
    </section>

    <section class="principles">
      <div class="principles__container content-container">

        <div class="principles__scroll">

          <h1 class="principles__title">A capocchij</h1>

          <div class="principles__list">

            <div class="principles__item">
              <img src="http://localhost:1337/uploads/daniel_j_schwarz_E_Gd7_J_Ro5_DC_0_unsplash_9c828d73c1.jpg" alt="">
            </div>

            <div class="principles__item">
              <img src="http://localhost:1337/uploads/daniel_j_schwarz_E_Gd7_J_Ro5_DC_0_unsplash_9c828d73c1.jpg" alt="">
            </div>

            <div class="principles__item">
              <img src="http://localhost:1337/uploads/daniel_j_schwarz_E_Gd7_J_Ro5_DC_0_unsplash_9c828d73c1.jpg" alt="">
            </div>

            <div class="principles__item">
              <img src="http://localhost:1337/uploads/daniel_j_schwarz_E_Gd7_J_Ro5_DC_0_unsplash_9c828d73c1.jpg" alt="">
            </div>

          </div>
          
        </div>
      </div> 
    </section>
    <section class="spacer"></section>
  </div>
</template>

<script>

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const sections = gsap.utils.toArray(".principles__item");
    let maxWidth = 0;

    const getMaxWidth = () => {
      maxWidth = 0;
      sections.forEach((section) => {
        maxWidth += section.offsetWidth;
        maxWidth += gsap.getProperty(section, 'marginLeft');    
      });
      maxWidth += 20;  
      maxWidth += window.innerWidth;
      maxWidth -= sections[0].offsetWidth;  
      return maxWidth;
    };

    getMaxWidth();
    ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

    gsap.set('section.spacer', { minHeight: window.innerHeight - document.querySelector('.principles').offsetHeight });

    gsap.to(sections, {
      x: () => `-${maxWidth - window.innerWidth}`,
      ease: "none",
      scrollTrigger: {
        trigger: ".principles",
        pin: true,
        scrub: 0.5,
        markers: true,
        end: () => `+=${maxWidth}`,
        invalidateOnRefresh: true
      }
    });

    sections.forEach((sct, i) => {
      ScrollTrigger.create({
        trigger: sct,
        start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth/2) * (maxWidth / (maxWidth - window.innerWidth)),
        end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
        toggleClass: {targets: sct, className: "active"}
      });
    });
  }
}
</script>


<style>
.wrapper{
  background-color: white;
}
.principles{
  padding: 60px 20px 120px;
  box-sizing: border-box;
  height: 100vh; /* Full page height */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.principles__container{
    margin: 0 auto;
    width: 100%;
    position: relative;
}
.principles__title{
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 42px;
    line-height: 54px;
    color: #1C2F6B;
    margin-bottom: 32px;
}
.principles__item img{
  width: 100px;
}

.principles__item:first-of-type{
  margin-left: 0;
}

.principles__item:after {
  display: block;
  width: 100%;
  height: 100%;
  content: "";
  background-color: #1C2F6B;
  position: absolute;
  left: 0;
  top: 0;
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transition: -webkit-transform .3s;
  transition: -webkit-transform .3s;
  transition: transform .3s;
  transition: transform .3s,-webkit-transform .3s;
  z-index: -1;
}

.principles__item.active:after {
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
}

</style>