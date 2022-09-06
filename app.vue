<template>
  <Head>
    <Title>Pinia</Title>
    <Meta name="description" content="My app description"/>
    <Link rel="icon" type="image/x-icon" href="assets/images/favicon.ico"></Link>
  </Head>
  <header div="">
    <nav class="flex flex-row items-center justify-between bg-white dark:text-white dark:bg-slate-600 h-24">
      <h1 class="ml-4 text-3xl">Pinia Store</h1>
      <div class="relative m-1">
        <span class="float-right inline-block">                
          <i class="material-icons-outlined text-xl bg-gray-400 rounded-full p-4 ">shopping_cart</i> 
          <div class="absolute top-0 right-0 block p-2 rounded-full bg-green-400 ring-2 ring-white text-xs">{{ cartStore.count }}</div>                       
        </span>
      </div>        
    </nav>
  </header>
  <!-- Store -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-gray-200 container mx-auto bg-white dark:text-white dark:bg-slate-600">
    <div class="flex place-content-around" v-for="product in products" :key="product">
      <div class="w-full m-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

        <img class="rounded-t-lg h-64 w-full object-cover" :src="product.imageURL" alt="" />

        <div class="p-5">
            <a href="#">
                <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{product.name}}</h1>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-300">
              <span class="text-xl">Price : </span>
              <span>$ {{product.price}}</span>
              </p>
        </div>

        <CountInput v-model="product.count" />

        <div class="flex justify-center">
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="addToCart(product)">Add to cart</button>
        </div>
      </div>
    </div>
  </div>

  <!--Cart-->
  <div class="border border-blue-400 container mx-auto h-full flex flex-col bg-white dark:text-white dark:bg-slate-600">
      <h1 class="text-2xl">Cart</h1> 
    
      <div v-if="cartStore.isEmpty">
        <h3>Your Cart is empty</h3>
      </div>
      <div v-else>
        <h3>There are {{cartStore.count }} items in your cart</h3>
        <div class="mt-2" v-for="(items, name) in cartStore.grouped" :key="items.name">
          <div class="flex flex-row items-center">
            <span>{{name}}</span>
            <span class="ml-4">Count: {{items.length}}</span>
            <span class="ml-4">Sub Total: $ {{subTotal(items.length, items[0].price)}}</span>
            <span class="ml-4 flex items-center"><i class="material-icons-outlined" @click="cartStore.removeItem(items[0].name)">delete</i></span>        
          </div>          
        </div>
        <div class="mt-6">
          <h1 class="text-3xl">Total: ${{cartStore.total}}</h1>
        </div>
        <div>
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="cartStore.$reset">Clear cart</button>        

          <button type="button" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800" @click="cartStore.checkout">Checkout</button>        

        </div>
      </div>   
  </div>
</template>

<script setup>
  // TODO Change "Add to Cart" to "Update Cart" on adding an item to the card
  
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
  for(let index=0; index < product.count; index++ ) {
    cartStore.addItems(product)
  }
}

const subTotal = (count, price) => {
  return (parseInt(count)  * parseInt(price))
}

</script>