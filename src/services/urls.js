const baseUrl = 'https://janus-alive.onrender.com';

const getApiUrl = (endpoint) => baseUrl + endpoint;

export const GET_PRODUCTS = getApiUrl('/api/products');

