import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { products } from './products/reducers'
import { viewProducts } from './viewProducts/reducers'
import { cartData, cartList } from './cart/reducers'

const rootReducer = combineReducers({
  viewProducts,
  products,
  cartData,
  cartList,
})

const configStore = () => createStore(rootReducer, applyMiddleware(thunk))
export default configStore
