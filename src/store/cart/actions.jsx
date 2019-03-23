export function cartData(car) {
  return {
    type: 'CART_DATA',
    payload: car,
  }
}

export function cartList(bool) {
  return {
    type: 'CART_LIST',
    payload: bool,
  }
}
