import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  Wrapper,
  Price,
  RightColumn,
  MyButton,
  Specifications
} from "./styled";

import { addToCart } from "../../store/cart/actions";
//

const Description = props => {
  const { products, user, addToCart } = props;
  const id = window.location.pathname.replace(/\D+/g, "");
  let index, unit;

  if (products) {
    index = products.map(e => e.id).indexOf(+id);
    unit = products[index];
  } else {
    return null;
  }

  if (products && !unit) window.location.pathname = "/not_found";

  return (
    <Wrapper>
      <img src={unit.image} alt="car" />
      <RightColumn>
        <div>
          <h1>{unit.product_name}</h1>
          <h2>{unit.modal}</h2>
          <h2>{unit.year}</h2>
        </div>
        <Price width={user && "auto"}>
          {unit.price}
          {user && (
            <MyButton onClick={() => addToCart(unit, user)}>
              Add to Cart
            </MyButton>
          )}
        </Price>
        <Specifications>
          <h2>Specifications</h2>
          <ul>
            <li>
              Motor:
              <span>{unit.motor}</span>
            </li>
            <li>
              Max speed:
              <span>{unit.max_speed}</span>
            </li>
            <li>
              Number of cylinders:
              <span>{unit.cylinder}</span>
            </li>
            <li>
              Product ID:
              <span>{unit.product_id}</span>
            </li>
          </ul>
        </Specifications>
      </RightColumn>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  products: state.products,
  user: state.authorizationStatus
});

const mapDispatchToProps = dispatch => ({
  addToCart: (purchase, user) => dispatch(addToCart(purchase, user))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Description)
);
