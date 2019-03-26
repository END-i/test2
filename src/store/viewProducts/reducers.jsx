export function viewProducts(state = true, action) {
  switch (action.type) {
    case 'TOGGLE_VIEW_PRODUCTS':
      console.log(action.payload)
      return action.payload
    default:
      return state
  }
}
