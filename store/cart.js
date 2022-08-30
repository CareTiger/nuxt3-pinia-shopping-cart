import {defineStore} from 'pinia'

export const useCartStore = defineStore({
    id: 'cart-store',
    state: () => {
        return {
            items: [],
            test: "hello world",    
        }
    },
    actions: {
        addItems(item) {            
            this.items.push(item)
        }
    },
    getters: {}
})