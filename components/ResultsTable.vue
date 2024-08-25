<template>
  <div v-if="showTable" class="w-full max-w-6xl bg-white shadow-lg rounded-lg p-6">
    <!-- Loading Indicator -->
    <Loading v-if="loading" />

    <!-- Tabs -->
    <div v-if="!loading" class="border-b border-gray-200">
      <nav class="-mb-px flex space-x-8">
        <button
          @click="activeTab = 'domain'"
          :class="activeTab === 'domain' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
          class="whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
        >
          Domain Information
        </button>
        <button
          @click="activeTab = 'contact'"
          :class="activeTab === 'contact' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
          class="whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
        >
          Contact Information
        </button>
      </nav>
    </div>

    <!-- Domain Information Table -->
    <DomainInformation v-if="!loading && activeTab === 'domain'" :domainResults="domainResults" />

    <!-- Contact Information Table -->
    <ContactInformation v-if="!loading && activeTab === 'contact'" :contactResults="contactResults" />
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
// import LoadingComponent from '~/components/LoadingComponent.vue';
// import DomainInformation from '~/components/DomainInformation.vue';
// import ContactInformation from '~/components/ContactInformation.vue';

const props = defineProps({
  domainResults: Object,
  contactResults: Object,
  showTable: Boolean,
  loading: Boolean,
});

const activeTab = ref('domain');
</script>

<style scoped>
/* Custom styles if needed */
</style>
