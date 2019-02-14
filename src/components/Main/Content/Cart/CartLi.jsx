import React from "react";

const CartLi = ({ cart }) =>
  cart.map((item, key) => (
    <h1 key={key}>{`${item.product_name}, ${item.year}, ${item.model}`}</h1>
  ));

export default CartLi;
