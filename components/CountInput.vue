<script setup>
    defineProps({
        modelValue: {
            type: [Number, String], 
            default: 0
        }
    })

    const emit = defineEmits(["update:modelValue", "input"]);
    const updateValue = (value) => {
        console.log(value)
        if (value !== "") {
            emit("update:modelValue", value);
        }    
    };
</script>

<template>
    <div class="flex flex-row space-x-6 justify-center items-center py-5">
        <button type="button" class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800" @click="updateValue(modelValue > 0 ? modelValue - 1 : null)">
        <i class="material-icons-outlined">remove</i>  
        </button>

        <input
            :value="modelValue"
            type="number"
            min="0"
            @input="updateValue($event.target.value)"
        />

        <button type="button" class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800" @click="updateValue(modelValue + 1)">
        <i class="material-icons-outlined">add</i>  
        </button>
    </div>    
</template>

<style scoped>
input[type="number"] {
    appearance: none;
    -moz-appearance: textfield;
    border: 1px solid gray;
    @apply border-gray-500 w-10 text-center;
}

</style>