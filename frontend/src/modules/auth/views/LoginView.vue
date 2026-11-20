<script setup lang="ts">
import { ref } from 'vue';
import AuthCard from '../components/AuthCard.vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../../stores/auth.ts';


const router = useRouter();
const authStore = useAuthStore();

const email = ref('');
const senha = ref('');
const carregando = ref(false);
const errorMessage = ref('');

async function handleLogin() {
  try {
    carregando.value = true;
    errorMessage.value = ''

    await authStore.login({email: email.value, password: senha.value}); 

    if (authStore.role === 'ADMIN') {
      router.push({name: 'admin-produtos'});
    } else if (authStore.role === 'EMPLOYEE') {
      router.push({name: 'ordem-pedidos'});
    } else {
      router.push({name: 'home'})
    }
  } catch (error: any) {
    errorMessage.value = error.response?.data?.message || "Erro ao fazer login.";
    alert(error.response?.data?.message || "Erro ao realizar operação.");
  } finally {
    carregando.value = false;
  }
  
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