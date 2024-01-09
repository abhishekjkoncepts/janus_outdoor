import { combineReducers } from "redux";

import { OutdoorReducer } from "./Outdoor";
import { HomeReducer } from "./Home";

const rootReducer = combineReducers({
  OutdoorReducer,
  HomeReducer,
});

export default rootReducer;
