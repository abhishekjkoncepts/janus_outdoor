import types from "../types";

const intialstate = {
  products: null,
  state: null,
  city: null,
  allstates:null,
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
      case types.GET_STATE_CITY:
        const data3 = action.payload;
        return{
          ...state,
        allstates: data3,
        }
    default:
      return state;
  }
};
