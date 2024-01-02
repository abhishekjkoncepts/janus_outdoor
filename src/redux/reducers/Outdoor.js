import types from "../types";

const intialstate = {
  products: null,
  state: null,
  city: null,
};

export const OutdoorReducer = (state = intialstate, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      const data = action.payload;
      return {
        ...state,
        products: data,
      };
    case types.GET_PRODUCTS_BY_STATE:
      const data2 = action.payload;
      return {
        ...state,
        products: data2,
      };
    default:
      return state;
  }
};
