import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { products } from './products/reducers'
import { toggleList } from './toggleList/reducers'
import { cartData, cartList } from './cart/reducers'

const rootReducer = combineReducers({
  products,
  toggleList,
  cartData,
  cartList,
})

const configStore = () => createStore(rootReducer, applyMiddleware(thunk))
export default configStore
