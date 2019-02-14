export function cartData(state = [], action) {
  switch (action.type) {
    case "CART_DATA":
      return [action.cartData, ...state];
    default:
      return state;
  }
}
