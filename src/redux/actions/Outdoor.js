import store from "../store";
import types from "../types";

import {
   GET_PRODUCTS ,
   GET_PRODUCTS_BY_STATE , 
   POST_CUSTOMER_ENQUIRY , 
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

export async function getProductsByState(state, city , category){
  return apiGet(`${GET_PRODUCTS_BY_STATE}?state=${state}&city=${city}&category=${category}`).then((res)=>{
    console.log(res);
    dispatch({
      type: types.GET_PRODUCTS_BY_STATE,
      payload:res,
    })
  })
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
  })
}


