export function toggleList(state = true, action) {
  switch (action.type) {
    case 'TOGGLE_LIST':
      return action.toggleList
    default:
      return state
  }
}
