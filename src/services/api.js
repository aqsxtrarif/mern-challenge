import apiClient from "../apiconfig/apiConfig"

/* ===========================================
   Requests for '/items' endpoint
  ============================================ */

// Function to retrieve products using a GET request
export const getProducts = async () => {
    try {
        const { data } = await apiClient.get('/items');
        return data;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

// Function to add an item using a POST request
export const addItem = async (formData) => {
    try {
        const { data } = await apiClient.post('/items', formData);
        return data;

    } catch (error) {
        console.log(error);
        throw error;
    }
}