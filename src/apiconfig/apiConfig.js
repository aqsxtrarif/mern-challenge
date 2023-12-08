import axios from 'axios';

/* ====================================================================
   Axios instance for making HTTP requests to the specified API base URL
/* ================================================================== */
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})

export default apiClient;