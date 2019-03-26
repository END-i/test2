import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { products } from './products/reducers'
import { viewProducts } from './viewProducts/reducers'
import { cartData, cartList } from './cart/reducers'
import { modalWindow } from './modalWindow/reducres'
import { authorizationStatus } from './authorizationStatus/reducres'

const rootReducer = combineReducers({
  viewProducts,
  products,
  cartData,
  cartList,
  modalWindow,
  authorizationStatus,
})

const configStore = () => createStore(rootReducer, applyMiddleware(thunk))
export default configStore
