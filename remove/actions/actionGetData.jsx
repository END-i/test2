import axios from "axios";

export function productsData(productsData) {
  return {
    type: "PRODUCTS_DATA",
    productsData
  };
}

export function getProdcutsData() {
  return dispatch => {
    axios
      .get("https://api.myjson.com/bins/19fkac")
      .then(response => {
        dispatch(productsData(response.data));
      })
      .catch(result => {
        console.log("result", result);
      });
  };
}
