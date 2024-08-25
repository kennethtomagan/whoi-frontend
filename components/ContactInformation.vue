<template>
  <table class="min-w-full bg-white mt-4">
    <thead>
      <tr>
        <th class="py-2 px-4 border-b text-center">Registrant Name</th>
        <th class="py-2 px-4 border-b text-center">Technical Contact Name</th>
        <th class="py-2 px-4 border-b text-center">Administrative Contact Name</th>
        <th class="py-2 px-4 border-b text-center">Contact Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="py-2 px-4 border-b text-center">{{ contactResults.registrarantName }}</td>
        <td class="py-2 px-4 border-b text-center">{{ contactResults.technicalContactName }}</td>
        <td class="py-2 px-4 border-b text-center">{{ contactResults.administrativeContactName }}</td>
        <td class="py-2 px-4 border-b text-center">{{ contactResults.contactEmail }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  contactResults: Object,
});
</script>

<style scoped>
/* Custom styles if needed */
</style>
