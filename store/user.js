import {defineStore} from 'pinia'

export const useUserStore = defineStore({
    id: 'user-store',
    state: () => {
        return {
            username: "Venky"
        }
    },
    actions: {},
    getters: {}
})