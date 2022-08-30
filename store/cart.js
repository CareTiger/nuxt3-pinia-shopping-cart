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
            //using spread operator to clone it
            this.items.push({...item})
        }
    },
    getters: {
        count: (state) => state.items.length

    }
})