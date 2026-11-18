<script setup lang="ts">
import { ref } from 'vue';
import AuthCard from '../components/AuthCard.vue';

const email = ref('');
const senha = ref('');
const carregando = ref(false);

function handleLogin() {
  console.log('TO DO');
}
</script>

<template>

  <AuthCard title="Bem-vindo de volta" switch-text="Não tem conta? Cadastre-se" switch-route-name="registro">
    <v-form @submit.prevent="handleLogin">

      <label for="email">E-mail</label>
      <v-text-field v-model="email" placeholder="seu@email.com" type="email" variant="outlined" rounded="0"
        density="comfortable" bg-color="#21170e" base-color="#38291d" color="#d94e1f" class="mb-2" id="email" />

      <label for="senha">Senha</label>
      <v-text-field v-model="senha" placeholder="......" type="password" variant="outlined" rounded="0"
        density="comfortable" bg-color="#21170e" base-color="#38291d" color="#d94e1f" class="mb-2" id="senha" />

      <v-btn type="submit" block rounded="0" color="primary" :loading="carregando">Entrar</v-btn>

    </v-form>
  </AuthCard>
  
</template>

<style scoped>
label {
  display: block;
  margin-bottom: 7px;
  color: #9d7d5a;
  font-size: 0.9em;
}
</style>