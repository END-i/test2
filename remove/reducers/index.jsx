import { combineReducers } from "redux";
import { productsData } from "./productsData";
import { toggleList } from "./toggleList";
import { cartData } from "./cartData";
import { cartList } from "./cartList";

export default combineReducers({
  productsData,
  toggleList,
  cartData,
  cartList
});
