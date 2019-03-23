export function cartList(state = false, action) {
  switch (action.type) {
    case "CART_LIST":
      return action.cartList;
    default:
      return state;
  }
}
