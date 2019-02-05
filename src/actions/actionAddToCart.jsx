export function cart(num) {
  return {
    type: "CART",
    num: num++
  };
}

export function addToCart(num) {
  return dispatch => {
    dispatch(cart());
  };
}
