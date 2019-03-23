export function toggleList(bool) {
  return {
    type: 'TOGGLE_LIST',
    payload: bool,
  }
}

export function actionToggleList(bool) {
  return dispatch => {
    dispatch(toggleList(bool))
  }
}
