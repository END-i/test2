import { combineReducers } from "redux";
import { productsData } from "./productsData";
import { toggleList } from "./toggleList";

export default combineReducers({
  productsData,
  toggleList
});
