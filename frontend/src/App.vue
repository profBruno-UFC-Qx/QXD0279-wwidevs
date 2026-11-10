<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
// import HomeView from "./modules/public/views/HomeView.vue";
</script>

<template>
  <v-app>
    <AppHeader />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
