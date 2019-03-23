export function cartData(state = [], action) {
  switch (action.type) {
    case 'CART_DATA':
      return action.cartData
    default:
      return state
  }
}

export function cartList(state = false, action) {
  switch (action.type) {
    case 'CART_LIST':
      return action.cartList
    default:
      return state
  }
}
