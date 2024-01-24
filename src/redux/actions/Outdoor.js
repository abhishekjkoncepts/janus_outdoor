import store from "../store";
import types from "../types";

import {
  GET_PRODUCTS,
  GET_PRODUCTS_BY_STATE,
  POST_CUSTOMER_ENQUIRY,
  GET_STATE_CITY,
  //  GET_PRODUCTS_CATEGORIES
} from "../../services/urls";
import { apiGet, apiPost } from "../../services/api";

const { dispatch } = store;

export async function getProducts() {
  return apiGet(GET_PRODUCTS).then((res) => {
    console.log(res);
    dispatch({
      type: types.GET_PRODUCTS,
      payload: res,
    });
  });
}

export async function getProductsByState(state, city, category = "") {
  console.log(state, city, category);
  const url =
    category === ""
      ? `${GET_PRODUCTS_BY_STATE}?state=${state}&city=${city}`
      : `${GET_PRODUCTS_BY_STATE}?state=${state}&city=${city}&type=${category}`;
  return apiGet(url).then((res) => {
    console.log('PRODUCTS BY STATE', res);
    dispatch({
      type: types.GET_PRODUCTS_BY_STATE,
      payload: res,
    });
  });
}

// export async function getProductsCategories(){
//   return apiGet(GET_PRODUCTS_CATEGORIES).then((res)=>{
//     console.log(res);
//     dispatch({
//       type:types.GET_PRODUCTS_CATEGORIES,
//       payload:res
//     })

//   })
// }

export async function getProductsById(id) {
  return apiGet(`${GET_PRODUCTS}/${id}`);
}

export async function submitenquiry(data) {
  return apiPost(POST_CUSTOMER_ENQUIRY, data).then((res) => {
    console.log(res);
  });
}

// Getting States and City

export async function getStateAndCity(data3) {
  return apiGet(GET_STATE_CITY, data3).then((res) => {
    console.log(res);
    dispatch({
      type: types.GET_STATE_CITY,
      payload: res,
    });
  });
}
