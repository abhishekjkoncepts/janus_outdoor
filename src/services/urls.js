const baseUrl = 'https://janus-alive.onrender.com';

const getApiUrl = (endpoint) => baseUrl + endpoint;

export const GET_PRODUCTS = getApiUrl('/api/products');
export const GET_PRODUCTS_BY_STATE = getApiUrl('/api/products');
// export const POST_CUSTOMER_ENQUIRY = getApiUrl('/api/conatactform');
export const POST_CUSTOMER_ENQUIRY = getApiUrl('/api/query');
export const GET_PRODUCTS_CATEGORIES = getApiUrl('/api/category')
export const POST_CUSTOMER_CONTACT = getApiUrl('/api/conatactform')

export const GET_STATE_CITY = getApiUrl('/api/statescity')

export const GET_INDIVIDUAL_PRODUCT = getApiUrl('/api/products/url')

export const GET_BLOGS = getApiUrl('/api/blog')




