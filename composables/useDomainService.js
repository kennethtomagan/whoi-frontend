import axios from "axios";

export default function useDomainService() {

    const rtConfig = useRuntimeConfig()

    let apiClient = axios.create({
        baseURL: rtConfig.public.API_URL,
        timeout: 10000, // Optional: timeout for requests
    });

    async function fetchDomainData(domain){
        return await apiClient.post('/api/domain-data', { domain });
    };

    return {
        apiClient, fetchDomainData
    }
}