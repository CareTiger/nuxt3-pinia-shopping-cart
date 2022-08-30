import {defineStore} from 'pinia'
import _ from 'lodash'

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
        count: (state) => state.items.length,

        //calling another getter from this getter 
        isEmpty: (state) => state.count === 0,

        //group the items
        grouped: (state) => _.groupBy(state.items, item => item.name),

        // Total
        total: (state) => {
            let total = 0;
            for(let index=0; index < state.items.length; index++) {
                total = total + parseInt(state.items[index].price);
            }
            return total
        }
    }
})