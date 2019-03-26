export function infoPopUp(state = false, action) {
  switch (action.type) {
    case 'VIEW_INFO_POP_UP':
      return action.payload
    default:
      return state
  }
}
