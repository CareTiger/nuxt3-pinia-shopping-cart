import {defineStore} from 'pinia'

export const useCart = defineStore({
    id: 'cart-store',
    state: () => {
        items: []
    },
    actions: {},
    getters: {}
})