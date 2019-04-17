export function authorizationStatus(state = null, action) {
  switch (action.type) {
    case "SIGN_IN":
      return action.payload;
    case "CLEAN_USER":
      return action.payload;
    default:
      return state;
  }
}
