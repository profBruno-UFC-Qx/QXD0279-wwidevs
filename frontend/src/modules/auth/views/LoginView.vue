<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const email = ref('');
const senha = ref('');
const carregando = ref(false);

function handleLogin() {
  console.log('TO DO');
}
</script>

<template>
  <v-container class="login-page fill-height justify-center align-center" fluid>
    <v-card class="form-card" width="100%" max-width="400" rounded="0" variant="outlined">

      <div class="brand mb-2">OVEN FLOW</div>

      <h1 class="mb-7">Bem-vindo de volta</h1>

      <v-form @submit.prevent="handleLogin">
        <label for="email">E-mail</label>
        <v-text-field v-model="email" placeholder="seu@email.com" type="email" variant="outlined" rounded="0"
          density="comfortable" bg-color="#21170e" base-color="#38291d" color="#d94e1f" class="mb-2" id="email" />

        <label for="senha">Senha</label>
        <v-text-field v-model="senha" placeholder="......" type="password" variant="outlined" rounded="0"
          density="comfortable" bg-color="#21170e" base-color="#38291d" color="#d94e1f" class="mb-2" id="senha" />

        <v-btn type="submit" block rounded="0" color="primary" :loading="carregando">Entrar</v-btn>

        <div class="register-container">
          <RouterLink :to="{ name: 'registro' }" class="register-link">Não tem conta? Cadastre-se</RouterLink>
        </div>

        <div class="back-container">
          <RouterLink :to="{ name: 'home' }" class="back-link"> &larr; Voltar ao cardápio</RouterLink>
        </div>
      </v-form>
    </v-card>
  </v-container>

</template>


<style scoped>
label {
  display: block;
  margin-bottom: 7px;
  color: #9d7d5a;
  font-size: 0.9em;
}

.login-page {
  display: flex;
  justify-content: center;
}

.form-card {
  padding: 40px;
  background-color: #1a120b;
  border-color: #38291d;
  color: #f5efe6;
}

.brand {
  color: #d94e1f;
  letter-spacing: 2px;
  font-size: 0.9em;
}

.register-container, .back-container {
  margin: 12px;
  text-align: center;
}

.register-link, .back-link {
  color: #9d7d5a;
  margin: 2px;
  text-decoration: none;
  transition: color 0.2s ease;
}

.register-link:hover, .back-link:hover {
  color: #806344;
}
</style>