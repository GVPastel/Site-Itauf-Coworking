<!-- Footer.vue -->
<template>
  <footer class="footer">
    <div class="container">
      <div class="row-footer">
        <div class="div-contatos">
          <p class="texto-footer"><strong>CONTATOS</strong></p>
          <p class="texto-footer"><strong>Email:</strong> contato@example.com</p>
          <p class="texto-footer"><strong>Telefone:</strong> (123) 456-7890</p>
          <p class="texto-footer"><a href="https://www.instagram.com/itaufcoworking/" target="_blank"
              class="texto-insta">Instagram</a></p>
          <p class="texto-footer"><a
              href="https://api.whatsapp.com/send/?phone=5548991029881&text=Ol%C3%A1%21+Quero+fazer+uma+reserva+na+iTAUF+Coworking%21&type=phone_number&app_absent=0"
              target="_blank" class="texto-insta">Whatsapp</a></p>
        </div>
        <div class="div-endereco">
          <p class="texto-footer"><strong>LOCALIZAÇÃO:</strong></p>
          <p class="texto-footer">Av. Dr. João Rimsa, 601 <br> Centro, Imbituba <br> SC, 88780-000, Brasil</p>
        </div>
        <div class="div-logo">
          <img src="../assets/img/Logo.png" alt="Logo" height="150">
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>
.footer {
  background-color: #888;
  padding: 2rem 0;
  margin-top: 2rem;
}

.btn-outline-secondary {
  color: aliceblue;
}

.footer a {
  color: #007bff;
  /* Cor dos links no footer */
}

.texto-footer {
  color: aliceblue;
  border-color: aliceblue;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'NotoSans-Regular', sans-serif;
  font-weight: 400;
}

.texto-insta {
  color: aliceblue !important;
  font-family: 'NotoSans-Regular', sans-serif;
  font-weight: 400;
}

.row-footer {
  flex-direction: row;
  display: flex;
  justify-content: space-around;
}

.footer a:hover {
  text-decoration: underline;
}
</style>
