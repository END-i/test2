import React, { Component, Fragment } from "react";
import takeData from "../../../takeData";
import Product from "./Product";

class ProductDetails extends Component {
  state = {};

  render() {
    return <Fragment>{takeData(Product)}</Fragment>;
  }
}

export default ProductDetails;
