import store from "../store";
import types from "../types";

import { GET_PRODUCTS ,GET_PRODUCTS_BY_STATE } from "../../services/urls";
import { apiGet } from "../../services/api";

const { dispatch } = store;
// export async function get_products() {
// export async function get_products() {
//    const res = await fetch(GET_PRODUCTS);
//    return res
//   console.log(res);
//   const responseJson = await res.json();
//   console.log(responseJson);
// }

export async function getProducts() {
  return apiGet(GET_PRODUCTS).then((res) => {
    console.log(res);
    dispatch({
      type: types.GET_PRODUCTS,
      payload: res,
    });
  });
}

export async function getProductsByState(state, city){
  return apiGet(`${GET_PRODUCTS_BY_STATE}?state=${state}&city=${city}`).then((res)=>{
    console.log(res);
    dispatch({
      type: types.GET_PRODUCTS_BY_STATE,
      payload:res,
    })
  })

}
