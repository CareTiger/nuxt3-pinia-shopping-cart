<template>
  <div class="flex container mx-auto" v-for="product in products" :key="product">
    <div class="max-w-sm m-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
          <img class="rounded-t-lg" :src="product.imageURL" alt="" />
      </a>
      <div class="p-5">
          <a href="#">
              <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{product.name}}</h1>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Price : {{product.price}}</p>

      </div>
    </div>
  </div>
</template>

// components/FilterMenu.vue
<script>
import { useFiltersStore } from '~/store/filters';
import { useProductsStore } from './store/products';

export default defineComponent({
  setup() {
    const filtersStore = useFiltersStore()
    const productsStore = useProductsStore()

    const filtersList = filtersStore.getFiltersList
    const products = productsStore.getProductsList

    return { filtersList, products }
  },
})
</script>