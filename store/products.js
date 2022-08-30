import { defineStore } from 'pinia'

export const useProductsStore = defineStore({
    id: 'products-store',
    // state
    state: () => {
        return {
            products: [],
        }
    },

    // actions
    actions: {
        async fill () {
            // dynamic import from a json file - similar to using axios form a rest api
            this.products = (await import("@/data/products")).default

        }
    },

    // getters
    getters: {
        getProductsList: state => state.products,
    },    
})