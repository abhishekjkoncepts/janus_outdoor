import types from "../types";

const intialstate = {
  products: null,
};

export const OutdoorReducer = (state = intialstate, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      const data = action.payload;
      return {
        ...state,
        products: data,
      };
    default:
      return state;
  }
};
