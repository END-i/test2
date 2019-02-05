export function toggleList(bool) {
  return {
    type: "TOGGLE_LIST",
    toggleList: bool
  };
}

export function actionToggleList(bool) {
  return dispatch => {
    dispatch(toggleList(bool));
  };
}
