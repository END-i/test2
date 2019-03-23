export function getProducts(data) {
  return {
    type: 'GET_PRODUCTS',
    payload: data,
  }
}

export function fetchGetProdcuts() {
  return dispatch => {
    fetch('https://api.myjson.com/bins/19fkac')
      .then(response => {
        dispatch(getProducts(response))
      })
      .catch(error => {
        console.log('error', error)
      })
  }
}
