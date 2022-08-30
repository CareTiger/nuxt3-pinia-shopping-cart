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
        },

        removeItem(name) {
            // group items by name
            const groupItems = _.groupBy(this.items, item => item.name)
            // remove the item
            const newGroup = _.omit(groupItems, name)
            this.items = _.flatMap(newGroup)
            // return _.omit(groupedItems, name)
        }

    },
    getters: {
        count: (state) => state.items.length,

        //calling another getter from this getter 
        isEmpty: (state) => state.count === 0,

        //group the items
        grouped: (state) => _.groupBy(state.items, item => item.name),

        // Total - my solution
/*         total: (state) => {
            let total = 0;
            for(let index=0; index < state.items.length; index++) {
                total = total + parseInt(state.items[index].price);
            }
            return total
        }, */

        // Total - instructor soluction
        total: (state) => state.items.reduce((p,c) => p + c.price, 0),

        // Example og a dynamic getter
        groupCount: state => (name) => state.grouped[name].length


    }
})