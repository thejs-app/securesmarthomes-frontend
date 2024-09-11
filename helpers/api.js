import axios from "axios";

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

export const getHeaders = async () => {
    let headers = {
        'Content-Type': 'application/json',
        'X-Api-Key': apiKey,
    }
    return headers
}

const api = {
    get: async (path) => {
        try {
            const result = await axios.get(`${apiUrl}${path}`, { headers: await getHeaders() });
            if (result?.data) {
                return result?.data;
            }
        } catch (error) {
            return error?.response?.data
        }
    },
    post: async (path, data) => {
        try {
            const result = await axios.post(`${apiUrl}${path}`, data, { headers: await getHeaders() });
            if (result?.data) {
                return result?.data;
            }
        } catch (error) {
            return error?.response?.data
        }
    },
    put: async (path, data) => {
        try {
            const result = await axios.put(`${apiUrl}${path}`, data, { headers: await getHeaders() });
            if (result?.data) {
                return result?.data
            }
        } catch (error) {
            return error?.response?.data
        }
    },
    delete: async (path) => {
        try {
            const result = await axios.delete(`${apiUrl}${path}`, { headers: await getHeaders() });
            if (result?.data) {
                return result?.data
            }
        } catch (error) {
            return error?.response?.data
        }
    }
}


export default api