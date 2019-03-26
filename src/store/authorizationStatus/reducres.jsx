export function authorizationStatus(state = null, action) {
  switch (action.type) {
    case 'SET_USER':
      return action.payload
    case 'CLEAN_USER':
      return action.payload
    default:
      return state
  }
}
