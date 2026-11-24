<script setup lang="ts">
import HeroImage from '../assets/hero_img.jpg'
import type {Product} from "../../../types/product.ts";
import ProductCard from "../../../components/ProductCard.vue";

const products: Product[] = [
  {
    id: '1',
    name: 'Margherita',
    price: 45.90,
    image: 'https://cdn.pixabay.com/photo/2020/04/29/03/30/pizza-5107039_1280.jpg',
    description: 'Molho de tomate, mussarela fresca e manjericão.',
    category: 'Pizzas Clássicas',
  },
  {
    id: '2',
    name: 'Calabresa',
    price: 48.90,
    image: 'https://images.pexels.com/photos/31094810/pexels-photo-31094810.jpeg',
    description: 'Calabresa fatiada, cebola e orégano.',
    category: 'Pizzas Clássicas',
  },
  {
    id: '3',
    name: 'Mussarela',
    price: 43.90,
    image: 'https://cdn.pixabay.com/photo/2019/07/06/09/05/pizza-4319999_1280.jpg',
    description: 'Mussarela especial, orégano e azeite extra virgem.',
    category: 'Pizzas Clássicas',
  },
  {
    id: '4',
    name: 'Portuguesa',
    price: 52.90,
    image: 'https://images.pexels.com/photos/33457561/pexels-photo-33457561.jpeg',
    description: 'Presunto, ovos cozidos, cebola e pimentão.',
    category: 'Pizzas Clássicas',
  },
  {
    id: '5',
    name: 'Quatro Queijos',
    price: 58.90,
    image: 'https://images.pexels.com/photos/28869117/pexels-photo-28869117.jpeg',
    description: 'Mussarela, gorgonzola, parmesão e provolone.',
    category: 'Pizzas Especiais',
  },
  {
    id: '6',
    name: 'Frango & Catupiry',
    price: 56.90,
    image: 'https://images.pexels.com/photos/33458049/pexels-photo-33458049.jpeg',
    description: 'Peito de frango desfiado com catupiry cremoso.',
    category: 'Pizzas Especiais',
  },
  {
    id: '7',
    name: 'Pepperoni Premium',
    price: 62.90,
    image: 'https://images.pexels.com/photos/30849268/pexels-photo-30849268.jpeg',
    description: 'Pepperoni importado generoso com molho especial.',
    category: 'Pizzas Especiais',
  },
  {
    id: '8',
    name: 'Trufa Negra',
    price: 79.90,
    image: 'https://images.pexels.com/photos/34675729/pexels-photo-34675729.jpeg',
    description: 'Creme de trufa, coguemelos shittake e lâminas de parmesão.',
    category: 'Pizzas Especiais',
  },
  {
    id: '9',
    name: 'Coca-Cola 350 ml',
    price: 6.90,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    description: 'Refrigerante gelado.',
    category: 'Bebidas',
  },
  {
    id: '10',
    name: 'Suco de Laranja',
    price: 10.90,
    image: 'https://images.pexels.com/photos/17612820/pexels-photo-17612820.jpeg',
    description: 'Suco natural espremido na hora, 500 ml.',
    category: 'Bebidas',
  },
  {
    id: '11',
    name: 'Água Mineral',
    price: 5.90,
    image: 'https://cdn.pixabay.com/photo/2017/02/02/15/15/bottle-2032980_1280.jpg',
    description: 'Sem gás, 500 ml.',
    category: 'Bebidas',
  },
  {
    id: '12',
    name: 'Tiramisu',
    price: 19.90,
    image: 'https://cdn.pixabay.com/photo/2023/10/26/14/31/cake-8342822_1280.jpg',
    description: 'Clássico italiano com mascarpone, café e cacau.',
    category: 'Sobremesas',
  },
  {
   id: '13',
   name: 'Panna Cotta',
   price: 16.90,
   image: 'https://cdn.pixabay.com/photo/2026/03/12/00/41/00-41-52-935_1280.jpg',
   description: 'Creme italiano com calda de frutas vermelhas.',
   category: 'Sobremesas', 
  }
]

function addToCart(product: Product) {
  console.log('Produto adicionado:', product)
}
</script>

<template>
    <section class="hero" :style="{'--hero-img' : `url(${HeroImage})`}">
      <v-container fluid class="hero-container">
        <div class="hero-overlay">
          <div class="hero-content">
            <span class="hero-subtitle">BEM-VINDO À</span>
            <h1>Oven Flow</h1>
          </div>
        </div>
      </v-container>
    </section>

    <v-row class="pa-6">
      <v-col
        v-for="product in products"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <ProductCard
          :product="product"
          @add-to-cart="addToCart"
        />
      </v-col>
    </v-row>
</template>
<style scoped>
  .hero {
    min-height: 330px;
    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.85),
        transparent
    ), var(--hero-img);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    position: relative;
  }

  .hero-container {
    min-height: 330px;
    width: 100%;
    display: flex;
    align-items: flex-end;
  }

  .hero-overlay {
    width: 100%;
    display: flex;
    align-items: flex-end;
    padding-bottom: 36px;
  }

  .hero-content {
    padding: 16px 24px;
  }


</style>
