import store from "../store";
import types from "../types";

import { apiGet } from "../../services/api";

import { GET_TYPE } from "../../services/urls";

const { dispatch } = store;

export async function getType() {
    return apiGet(GET_TYPE).then((res) => {
      console.log("Typeresponse", res);
      dispatch({
        type: types.GET_TYPE,
        payload: res,
      });
    });
  }