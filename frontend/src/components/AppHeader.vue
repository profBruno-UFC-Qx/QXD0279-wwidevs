<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()

const showLogoutMessage = ref(false)
</script>

<template>
  <v-app-bar color="#382310" class="px-4">
    <template #prepend>
      <v-icon icon="mdi-pizza" class="pl-6" color="white" size="large" />
    </template>
    <v-app-bar-title class="font-display">Oven Flow</v-app-bar-title>
    <v-btn :to="{ name: 'home' }" class="primary ma-2" variant="text">Cardápio</v-btn>
    <v-btn v-if="!authStore.isAuthenticated" :to="{ name: 'login' }" color="primary" variant="flat">
      Entrar
    </v-btn>

    <v-btn v-else color="primary" variant="flat" @click="() => {
      authStore.logout()
      showLogoutMessage = true
    }">
      Sair
    </v-btn>
  </v-app-bar>

  <v-snackbar v-model="showLogoutMessage" color="success" timeout="3000">
    <div class="text-center w-100">
      Você saiu da sua conta!
    </div>
  </v-snackbar>
</template>

<style></style>
