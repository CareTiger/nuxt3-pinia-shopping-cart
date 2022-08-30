<template>
  <Head>
    <Title>Pinia</Title>
    <Meta name="description" content="My app description"/>
  </Head>
  <!-- Store -->
  <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-gray-200 container mx-auto">
    <div class="flex place-content-around" v-for="product in products" :key="product">
      <div class="max-w-sm m-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

        <img class="rounded-t-lg" :src="product.imageURL" alt="" />

        <div class="p-5">
            <a href="#">
                <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{product.name}}</h1>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Price : {{product.price}}</p>
        </div>

        <div class="flex flex-row space-x-6 justify-center items-center py-5">
          <button type="button" class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Icon description</span>
          </button>
          <p class="text-gray-800 text-xl dark:text-white"># </p>
          <button type="button" class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800" >
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Icon description</span>
          </button>
        </div>

        <div class="flex justify-center">
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="addToCart">Add to cart</button>
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

import { storeToRefs } from 'pinia';

const filtersStore = useFiltersStore()
const filtersList = filtersStore.getFiltersList

// first way of getting items from state using getters
const productsStore = useProductsStore()
const products = productsStore.getProductsList

// second way of getting items from store using destructuring 
// ONLY USE WHEN NOT CALLING ANY ACTIONS
// const { products } = storeToRefs(useProductsStore())

productsStore.fill();

function addToCart() {
  console.log("hello")
}
</script>