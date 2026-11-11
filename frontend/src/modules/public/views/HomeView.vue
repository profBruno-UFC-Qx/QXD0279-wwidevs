<script setup lang="ts">
import HeroImage from '../assets/hero_img.jpg'
import type {Product} from "../../../types/product.ts";
import ProductCard from "../../../components/ProductCard.vue";

const products: Product[] = [
  {
    id: '1',
    name: 'Margherita',
    price: 39.90,
    image: 'https://img.magnific.com/fotos-gratis/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.jpg?semt=ais_hybrid&w=740&q=80',
    description: 'Molho de tomate artesanal, mussarela, tomate fresco e manjericão.',
    category: 'Tradicionais',
  },
  {
    id: '2',
    name: 'Calabresa',
    price: 42.90,
    image: 'https://img.magnific.com/fotos-gratis/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.jpg?semt=ais_hybrid&w=740&q=80',
    description: 'Molho de tomate, mussarela, calabresa fatiada e cebola.',
    category: 'Tradicionais',
  },
  {
    id: '3',
    name: 'Quatro Queijos',
    price: 49.90,
    image: 'https://img.magnific.com/fotos-gratis/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.jpg?semt=ais_hybrid&w=740&q=80',
    description: 'Uma combinação irresistível de mussarela, provolone, parmesão e gorgonzola.',
    category: 'Especiais',
  },
  {
    id: '4',
    name: 'Frango com Catupiry',
    price: 47.90,
    image: 'https://img.magnific.com/fotos-gratis/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.jpg?semt=ais_hybrid&w=740&q=80',
    description: 'Frango desfiado temperado, mussarela e cremoso Catupiry.',
    category: 'Especiais',
  },
  {
    id: '5',
    name: 'Portuguesa',
    price: 46.90,
    image: 'https://img.magnific.com/fotos-gratis/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.jpg?semt=ais_hybrid&w=740&q=80',
    description: 'Presunto, ovos, cebola, ervilha, mussarela e azeitonas.',
    category: 'Tradicionais',
  },
  {
    id: '6',
    name: 'Pepperoni',
    price: 52.90,
    image: 'https://img.magnific.com/fotos-gratis/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.jpg?semt=ais_hybrid&w=740&q=80',
    description: 'Mussarela derretida e generosas fatias de pepperoni.',
    category: 'Especiais',
  },
  {
    id: '7',
    name: 'Bacon Supreme',
    price: 54.90,
    image: 'https://img.magnific.com/fotos-gratis/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.jpg?semt=ais_hybrid&w=740&q=80',
    description: 'Bacon crocante, mussarela, cebola caramelizada e molho especial.',
    category: 'Especiais',
  },
  {
    id: '8',
    name: 'Chocolate com Morango',
    price: 44.90,
    image: 'https://img.magnific.com/fotos-gratis/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.jpg?semt=ais_hybrid&w=740&q=80',
    description: 'Chocolate ao leite cremoso, morangos frescos e chocolate granulado.',
    category: 'Doces',
  },
  {
    id: '9',
    name: 'Banana com Canela',
    price: 39.90,
    image: 'https://img.magnific.com/fotos-gratis/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.jpg?semt=ais_hybrid&w=740&q=80',
    description: 'Banana caramelizada, açúcar, canela e leite condensado.',
    category: 'Doces',
  },
  {
    id: '10',
    name: 'Romeu e Julieta',
    price: 42.90,
    image: 'https://img.magnific.com/fotos-gratis/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.jpg?semt=ais_hybrid&w=740&q=80',
    description: 'Uma combinação clássica de goiabada cremosa e queijo mussarela.',
    category: 'Doces',
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
