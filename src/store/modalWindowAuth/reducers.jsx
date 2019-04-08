export function modalWindowAuth(state = false, action) {
  switch (action.type) {
    case "OPEN_CLOSE_MODAL":
      return action.payload;
    default:
      return state;
  }
}
