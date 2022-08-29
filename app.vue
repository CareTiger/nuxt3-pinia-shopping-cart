<template>
  <div>
    {{ filtersList }}
  </div>
</template>

// components/FilterMenu.vue
<script>
import { useFiltersStore } from '~/store/filters'

export default defineComponent({
  setup() {
    const filtersStore = useFiltersStore()
    const filtersList = filtersStore.getFiltersList

    return { filtersList }
  },
})
</script>