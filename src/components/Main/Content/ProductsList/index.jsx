import React, { Component, Fragment } from "react";
import takeData from "../../../takeData";
import List from "./List";

class ProductList extends Component {
  state = {};

  render() {
    return <Fragment>{takeData(List)}</Fragment>;
  }
}

export default ProductList;
