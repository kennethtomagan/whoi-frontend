<template>
  <div class="w-full max-w-md mb-6">
    <form @submit.prevent="onSearch" class="bg-white shadow-lg rounded-lg p-6">
      <div class="flex items-center border-b border-gray-300 py-2">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Enter domain name..."
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
        <button
          type="submit"
          class="flex-shrink-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { defineEmits, ref } from 'vue';

const emit = defineEmits(['search']);
const searchQuery = ref('');

const onSearch = () => {
  emit('search', searchQuery.value);
};
</script>