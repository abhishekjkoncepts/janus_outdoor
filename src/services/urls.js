const baseUrl = 'https://janus-alive.onrender.com';

const getApiUrl = (endpoint) => baseUrl + endpoint;

export const GET_PRODUCTS = getApiUrl('/api/products');
export const GET_PRODUCTS_BY_STATE = getApiUrl('/api/products');
export const POST_CUSTOMER_ENQUIRY = getApiUrl('/api/conatactform');


