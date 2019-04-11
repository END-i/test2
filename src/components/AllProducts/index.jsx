import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import GridView from "./GridView";
import ListView from "./ListView";

import { Wrapper } from "./styled";

import { addToCart } from "../../store/cart/actions";
//
//
//

const AllProducts = ({ products, viewProducts, user, addToCart }) => {
  if (!products) return null;

  return (
    <Wrapper>
      {viewProducts ? (
        <ListView unit={products} user={user} addToCart={addToCart} />
      ) : (
        <GridView unit={products} user={user} addToCart={addToCart} />
      )}
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  viewProducts: state.viewProducts,
  products: state.products,
  user: state.authorizationStatus
});

const mapDispatchToProps = dispatch => ({
  addToCart: (purchase,user) => dispatch(addToCart(purchase, user))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AllProducts)
);
