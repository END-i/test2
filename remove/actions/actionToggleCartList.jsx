export function cartList(bool) {
  return {
    type: "CART_LIST",
    cartList: bool
  };
}

export function toggleCartList(bool) {
  return dispatch => {
    dispatch(cartList(bool));
  };
}
