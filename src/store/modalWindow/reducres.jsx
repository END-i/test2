export function modalWindow(state = true, action) {
  switch (action.type) {
    case 'OPEN_CLOSE_MODAL_WINDOW':
      return action.payload
    default:
      return state
  }
}
