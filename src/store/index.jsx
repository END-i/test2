import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
// import logger from "redux-logger";

import { products } from "./products/reducers";
import { viewProducts } from "./viewProducts/reducers";
import { cart } from "./cart/reducers";
import { modalWindowAuth } from "./modalWindowAuth/reducers";
import { authorizationStatus } from "./authorizationStatus/reducres";

const rootReducer = combineReducers({
  viewProducts,
  products,
  cart,
  modalWindowAuth,
  authorizationStatus
});

const configStore = () => createStore(rootReducer, applyMiddleware(thunk));
export default configStore;
