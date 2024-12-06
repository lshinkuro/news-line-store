import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // Replace with your API base URL

// Create an instance of Axios with default settings
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // Optional: set a timeout for requests
});

// Handle request errors
const handleRequestError = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error('Response error:', error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    console.error('Request error:', error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error('Error:', error.message);
  }
  return Promise.reject(error);
};

// GET request
export const get = async (endpoint, params = {}) => {
  try {
    const response = await axiosInstance.get(endpoint, { params });
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

// POST request
export const post = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

// PUT request
export const put = async (endpoint, data) => {
  try {
    const response = await axiosInstance.put(endpoint, data);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

// DELETE request
export const del = async (endpoint) => {
  try {
    const response = await axiosInstance.delete(endpoint);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};
