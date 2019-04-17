export function viewProducts(state = false, action) {
  switch (action.type) {
    case 'TOGGLE_VIEW_PRODUCTS':
      return action.payload
    default:
      return state
  }
}
