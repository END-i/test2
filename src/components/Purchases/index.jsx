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
  console.log(user)
  const buyFunc = () => {
    window.open('https://scontent-iad3-1.cdninstagram.com/vp/a29809efa95a05aa3b65d296c5b3e74e/5CEBFBD2/t51.2885-15/e35/37563340_239069136804174_7711342754646720512_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com');
    cleareCart(user)
  }


  if (!cart) return null;

  return (
    <Wrapper>
      <ButtonControl onClick={cleareCart}>Clear</ButtonControl>
        <ButtonControl onClick={buyFunc} colorBg="rgb(77,144,6)">Buy</ButtonControl>
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
  user: state.authorizationStatus
});
const mapDispatchToProps = dispatch => ({
  removePurchase: id => dispatch(removePurchaseFromCart(id)),
  cleareCart: user => dispatch(cleareCart(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Purchases);
