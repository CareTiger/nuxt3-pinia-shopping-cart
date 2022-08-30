<template>
  <Head>
    <Title>Pinia</Title>
    <Meta name="description" content="My app description"/>
    <Link rel="icon" type="image/x-icon" href="assets/images/favicon.ico"></Link>
  </Head>
  <!-- Store -->
  <div class="serif mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-gray-200 container mx-auto">
    <div class="flex place-content-around" v-for="product in products" :key="product">
      <div class="max-w-sm m-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

        <img class="rounded-t-lg" :src="product.imageURL" alt="" />

        <div class="p-5">
            <a href="#">
                <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{product.name}}</h1>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Price : {{product.price}}</p>
        </div>

        <CountInput v-model="product.count" />

        <div class="flex justify-center">
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="addToCart(product)">Add to cart</button>
        </div>
      </div>
    </div>
  </div>

  <!--Cart-->
  <div class="border border-gray-200 container mx-auto mt-6">
      <h1 class="text-2xl">Cart</h1> 
  </div>
</template>

<script setup>
import { useFiltersStore } from '~/store/filters';
import { useProductsStore } from './store/products';
import { useCartStore } from '~/store/cart';

const count = ref(0);

const filtersStore = useFiltersStore()
const filtersList = filtersStore.getFiltersList

// first way of getting items from state using getters
const productsStore = useProductsStore()
const products = productsStore.getProductsList

// second way of getting items from store using destructuring 
// ONLY USE WHEN NOT CALLING ANY ACTIONS
// const { products } = storeToRefs(useProductsStore())

productsStore.fill();

// cart functionaility
const cartStore = reactive(useCartStore ());

const addToCart = (product) => {
    cartStore.addItems(product)
}
</script>