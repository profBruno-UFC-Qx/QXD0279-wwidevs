<script setup lang="ts">
import { ref } from 'vue';
import AuthCard from '../components/AuthCard.vue';
import { useAuthStore } from '../../../stores/auth.ts';
import { useRouter } from 'vue-router';

const router = useRouter();
const authStore = useAuthStore();

const nome = ref('');
const email = ref('');
const senha = ref('');
const carregando = ref(false);
const errorMessage = ref('')

async function handleRegister() {
  try {
    carregando.value = true;
    errorMessage.value = '';

    await authStore.register({name: nome.value, email: email.value, password: senha.value});

    router.push({name: 'login'})

  } catch (error: any) {  
    errorMessage.value = error.response?.data?.message || 'Erro ao cadastrar';
    alert(error.response?.data?.message || "Erro ao realizar operação.");
  } finally {
    carregando.value = false;
  }
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