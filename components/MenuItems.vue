<template>
  <transition name="fade">
    <div v-if="isMenuOpen" class="menu-overlay">
      <ul class="menu-links">
        <li class="menu-item anim-in">
          <NuxtLink to="/" @click="closeMenu">
            Home
          </NuxtLink>
        </li>
        <li class="menu-item anim-in">
          <NuxtLink to="/memories" @click="closeMenu">
            Memories
          </NuxtLink>
        </li>
        <li class="menu-item anim-in">
          <NuxtLink to="/stories" @click="closeMenu">
            Stories
          </NuxtLink>
        </li>
        <li class="menu-item anim-in">
          <NuxtLink to="/about" @click="closeMenu">
            About
          </NuxtLink>
        </li>
        <li class="menu-item anim-in">
          <NuxtLink to="/faq" @click="closeMenu">
            FAQ
          </NuxtLink>
        </li>
        <li class="menu-item anim-in">
          <NuxtLink to="/contacts" @click="closeMenu">
            Contacts
          </NuxtLink>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
import { gsap } from 'gsap';
import SplitText from 'gsap/SplitText'; // Usa SplitText per dividere le parole

gsap.registerPlugin(SplitText);

export default {
  props: ['isMenuOpen'],
  mounted() {
    if (process.client) {
      // Registra SplitText quando il client è disponibile
      gsap.registerPlugin(SplitText);
    }
  },
  watch: {
    isMenuOpen(newVal) {
      if (newVal) {
        // Aspetta che il DOM sia pronto
        this.$nextTick(() => {
          const animEls = document.querySelectorAll('.anim-in');

          animEls.forEach(el => {
            // Usa SplitText per dividere le parole su ciascun elemento li
            const splitEl = new SplitText(el, { type: 'words', wordsClass: 'word' });

            // Crea una timeline di animazione per ciascun li
            const splitTl = gsap.timeline({
              duration: 0.35,
              ease: 'power4'
            });

            // Anima le parole all'interno del li con l'effetto slide-in-up
            splitTl.from(splitEl.words, {
              yPercent: 100,  // Le parole appaiono risalendo
              opacity: 0,  // Appaiono gradualmente
              stagger: 0.1,  // Ritardo tra ciascuna parola
              duration: 0.8,  // Durata di ciascuna animazione
              ease: 'power4.out'  // Movimento fluido di risalita
            });
          });
        });
      }
    }
  },
  methods: {
    closeMenu() {
      this.$emit('close-menu');
    }
  }
};
</script>

<style scoped>
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.menu-links {
  list-style: none;
  padding: 0;
}

.menu-links li {
  margin: 1.5rem 0;
}

.menu-links li a {
  color: white;
  font-size: 3rem;
  text-decoration: none;
}

.word {
  display: inline-block;
  overflow: hidden;
}
</style>
