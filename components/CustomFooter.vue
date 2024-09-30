<template>
  <footer class="custom-footer">
    <div class="container">
      <div class="footer-content">
        <p>
          © {{ new Date().getFullYear() }} Copyright · Nando Spiezia |  Wedding photographer · 
          <NuxtLink to="/cookie-policy">COOKIE POLICY</NuxtLink> · 
          Credits <a href="https://serendipstudio.com" target="_blank" rel="noopener">Serendip Studio</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.custom-footer {
  background-color: black;
  color: white;
  text-align: center;
  padding: 15px 0;
  font-size: 0.85rem; /* Testo leggermente più piccolo */
}

.custom-footer a {
  color: white;
  text-decoration: none;
}

.custom-footer a:hover {
  text-decoration: underline;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px; /* Aggiunge padding per evitare che il testo tocchi i lati dello schermo sui dispositivi più piccoli */
}

.footer-content p {
  margin: 0;
}

/* Stile responsive */
@media (max-width: 768px) {
  .custom-footer {
    font-size: 0.8rem;
  }

  .footer-content p {
    line-height: 1.4;
  }
}

@media (max-width: 576px) {
  .custom-footer {
    font-size: 0.75rem;
  }
}
</style>
