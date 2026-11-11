<script setup lang="ts">
  import type {Product} from "../types/product.ts";

  defineProps<{
    product: Product
  }>()

  const emit = defineEmits<{
    addToCart: [product: Product]
  }>()
</script>

<template>
  <v-card
      class="mx-auto"
      max-width="344"
  >
    <v-img
        :src="product.image"
        :alt="product.name"
        height="200px"
        cover
    ></v-img>

    <div class="pa-2">
      <v-card-title>
        {{ product.name }}
      </v-card-title>

      <v-card-subtitle>
        <v-chip variant="tonal" color="secondary" size="small">
          {{ product.category }}
        </v-chip>
      </v-card-subtitle>

      <v-card-text>
        <p> {{ product.description }}</p>

        <h2>
          {{ product.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })}}
        </h2>
      </v-card-text>

      <v-card-actions>
        <v-btn
            color="primary"
            variant="flat"
            text="Adicionar ao Pedido"
            @click="emit('addToCart', product)"
        ></v-btn>
      </v-card-actions>
    </div>

  </v-card>
</template>
<style>

</style>