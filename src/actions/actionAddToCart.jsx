export function cartData(car) {
  return {
    type: "CART_DATA",
    cartData: car
  };
}

export function addToCart(car) {
  console.log(car);
  return dispatch => {
    dispatch(cartData(car));
  };
}
