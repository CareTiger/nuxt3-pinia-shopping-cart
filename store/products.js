import { defineStore } from 'pinia'
import products from '~/data/products'

export const useProductsStore = defineStore({
    id: 'products-store',
    // state
    state: () => {
        return {
            products,
        }
    },

    // actions
    actions: {},

    // getters
    getters: {
        getProductsList: state => state.products,
    },    
})