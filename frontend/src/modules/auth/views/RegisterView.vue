<script setup lang="ts">
import { ref } from 'vue';
import AuthCard from '../components/AuthCard.vue';

const nome = ref('');
const email = ref('');
const senha = ref('');
const carregando = ref(false);

function handleRegister() {
  console.log('TO DO');
}
</script>

<template>

  <AuthCard title="Criar Conta" switch-text="Já tem conta? Entrar" switch-route-name="login">
    <v-form @submit.prevent="handleRegister">

      <label for="usuario">Nome e sobrenome</label>
      <v-text-field v-model="nome" placeholder="João Silva" type="text" variant="outlined" rounded="0"
        density="comfortable" bg-color="#21170e" base-color="#38291d" color="#d94e1f" class="mb-2"
        id="usuario"></v-text-field>

      <label for="email">E-mail</label>
      <v-text-field v-model="email" placeholder="seu@email.com" type="email" variant="outlined" rounded="0"
        density="comfortable" bg-color="#21170e" base-color="#38291d" color="#d94e1f" class="mb-2" id="email" />

      <label for="senha">Senha</label>
      <v-text-field v-model="senha" placeholder="......" type="password" variant="outlined" rounded="0"
        density="comfortable" bg-color="#21170e" base-color="#38291d" color="#d94e1f" class="mb-2" id="senha" />

      <v-btn type="submit" block rounded="0" color="primary" :loading="carregando">Criar conta</v-btn>

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