export function loading(state = true, action) {
  switch (action.type) {
    case 'TOGGLE_LOADING':
      return action.payload
    default:
      return state
  }
}
