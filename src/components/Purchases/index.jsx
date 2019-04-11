import React from "react";
import { connect } from "react-redux";

import { Wrapper, ButtonControl } from "./styled";
import Purchase from "./Purchase";
import Empty from "./Empty";

import { removePurchaseFromCart } from "../../store/cart/actions";
import { cleareCart } from "../../store/cart/actions";
//
//
//

const Purchases = ({ cart, user, removePurchase, cleareCart }) => {
  const removeItem = key => () => {
    removePurchase(key, user);
  };

  if (!cart) return null;

  return (
    <Wrapper>
      <ButtonControl onClick={cleareCart}>Clear</ButtonControl>
      <ButtonControl colorBg="rgb(77,144,6)">Buy</ButtonControl>
      {cart.length > 0 ? (
        <Purchase cart={cart} removeItem={removeItem} />
      ) : (
        <Empty />
      )}
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  cart: state.cart,
  user: state.user
});
const mapDispatchToProps = dispatch => ({
  removePurchase: id => dispatch(removePurchaseFromCart(id)),
  cleareCart: user => dispatch(cleareCart(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Purchases);
