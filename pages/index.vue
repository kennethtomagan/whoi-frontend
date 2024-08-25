<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
    <!-- Search Bar -->
    <SearchBar @search="handleSearch" />

    <!-- Error Message -->
    <ErrorMessage :message="errorMessage" />

    <!-- Results Table with Tabs -->
    <ResultsTable
      :domainResults="domainResults"
      :contactResults="contactResults"
      :showTable="showTable"
      :loading="loading" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
// State variables
const showTable = ref(false);
const domainResults = ref({});
const contactResults = ref({});
const errorMessage = ref('');
const { fetchDomainData } = useDomainService()
const loading = ref(false);

// Methods
const handleSearch = async (searchQuery) => {
    console.log("Searching for:", searchQuery);
    showTable.value = true;
    loading.value = true;

    fetchDomainData(searchQuery).then((response) => {
        const data = response.data.data;
        domainResults.value = data.domain_information || {};
        contactResults.value = data.contact_information || {};
        loading.value = false;
        errorMessage.value = '';

    }).catch(error => {
        console.error("Error fetching data:", error);
        errorMessage.value = error.response?.data?.message || "An error occurred while fetching data.";
        showTable.value = false; // Hide the table if there's an error
        loading.value = false;
    })
};
</script>