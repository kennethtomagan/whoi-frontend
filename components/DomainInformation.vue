<template>
  <table class="min-w-full bg-white mt-4">
    <thead>
      <tr>
        <th class="py-2 px-4 border-b text-center">Domain</th>
        <th class="py-2 px-4 border-b text-center">Registrar</th>
        <th class="py-2 px-4 border-b text-center">Registration Date</th>
        <th class="py-2 px-4 border-b text-center">Expiration Date</th>
        <th class="py-2 px-4 border-b text-center">Estimated Age</th>
        <th class="py-2 px-4 border-b text-center">Hostnames</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="py-2 text-center px-4 border-b">{{ domainResults.domain }}</td>
        <td class="py-2 px-4 border-b text-center">{{ domainResults.registrar }}</td>
        <td class="py-2 px-4 border-b text-center">{{ domainResults.registrationDate }}</td>
        <td class="py-2 px-4 border-b text-center">{{ domainResults.expirationDate }}</td>
        <td class="py-2 px-4 border-b text-center">{{ domainResults.estimatedAge }}</td>
        <td class="py-2 px-4 border-b text-center">
          <ul>
            <li v-for="(hostname, index) in domainResults.hostnames" :key="index">
              {{ hostname }}
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  domainResults: Object,
});
</script>

<style scoped>
/* Custom styles if needed */
</style>
