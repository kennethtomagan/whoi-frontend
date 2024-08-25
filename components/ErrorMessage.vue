<template>
  <div v-if="message" class="mt-4 text-red-500">
    {{ message }}
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  message: String,
});
</script>