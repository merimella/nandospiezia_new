import { gsap } from 'gsap';
// Funzioni di transizione
const beforeEnter = (el) => {
    gsap.set(el, {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 2,
      x: '100vw',
      opacity: 1, // The new page has no opacity effect
    });
  };
  
  const enter = (el, done) => {
    const tl = gsap.timeline({
      onComplete: done,
      delay: 0.5, // Delay before the new page animation starts
    });
    tl.to(el, {
      x: '0vw', // Slide in the new page fully
      duration: 1.5, // Slowing down the new page transition slightly for better synchronization
      ease: 'power2.out',
    });
  };
  
  const beforeLeave = (el) => {
    gsap.set(el, {
      zIndex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    });
  };
  
  const leave = (el, done) => {
    const tl = gsap.timeline({
      onComplete: done,
      delay: 0.5, // Adding the delay to the old page's leave animation for synchronization
    });
    tl.to(el, {
      x: '-20vw', // Push the old page slightly to the left
      opacity: 0.5, // Fade slightly but keep the old page visible
      duration: 2, // Maintain longer duration for old page fade-out
      ease: 'power2.out',
    });
  };