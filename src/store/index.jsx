import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { products } from "./products/reducers";
import { viewProducts } from "./viewProducts/reducers";
import { cartData, cartList } from "./cart/reducers";
import { modalWindowAuth } from "./modalWindowAuth/reducers";
import { authorizationStatus } from "./authorizationStatus/reducres";

const rootReducer = combineReducers({
  viewProducts,
  products,
  cartData,
  cartList,
  modalWindowAuth,
  authorizationStatus
});

const configStore = () =>
  createStore(rootReducer, applyMiddleware(thunk, logger));
export default configStore;
