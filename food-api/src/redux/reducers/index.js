import { combineReducers } from "redux";
import { randomProductReducer } from "./allProducts";
import { selectedProductReducer } from "./allProducts";

const rootReducers = combineReducers({
    randomProductReducer,
    selectedProductReducer
});

export default rootReducers;
