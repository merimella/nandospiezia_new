// import Lenis from '@studio-freight/lenis';

export default defineNuxtPlugin(() => {
    const { $isClient } = useNuxtApp();
  
    // if ($isClient) {
    //   const lenis = new Lenis({
    //     lerp: 0.1,
    //   });
  
    //   const raf = (time: number) => {
    //     lenis.raf(time);
    //     requestAnimationFrame(raf);
    //   };
  
    //   requestAnimationFrame(raf);
    // }
  });
  