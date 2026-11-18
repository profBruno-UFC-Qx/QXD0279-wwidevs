<script setup lang="ts">
defineProps<{
  title: string
  switchText: string
  switchRouteName: string
}>()
</script>

<template>
  <v-container class="auth-page fill-height justify-center align-center" fluid>
    <v-card class="form-card" width="100%" max-width="400" rounded="0" variant="outlined">
      <div class="brand mb-2">OVEN FLOW</div>

      <h1 class="mb-7">{{ title }}</h1>

      <slot />

      <div class="register-container">
        <RouterLink :to="{ name: switchRouteName }" class="register-link">
          {{ switchText }}
        </RouterLink>
      </div>

      <div class="back-container">
        <RouterLink :to="{ name: 'home' }" class="back-link">
          &larr; Voltar ao cardápio
        </RouterLink>
      </div>
    </v-card>
  </v-container>
</template>

<style scoped>
.auth-page {
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