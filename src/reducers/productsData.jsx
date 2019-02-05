export function productsData(state = null, action) {
  switch (action.type) {
    case "PRODUCTS_DATA":
      return action.productsData;
    default:
      return state;
  }
}
