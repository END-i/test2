export function products(state = null, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return action.payload
    default:
      return state
  }
}
