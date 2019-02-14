export function cartData(num) {
  return {
    type: "CART_DATA",
    cartData: num
  };
}

export function addToCart(car) {
  console.log(car);
  return dispatch => {
    dispatch(cartData(car));
  };
}
