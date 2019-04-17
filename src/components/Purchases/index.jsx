import React, { Fragment } from "react";
import { connect } from "react-redux";

import { Wrapper, ButtonControl } from "./styled";
import Purchase from "./Purchase";
import Empty from "./Empty";

import { removePurchaseFromCart } from "../../store/cart/actions";
import { cleareCart } from "../../store/cart/actions";
//

const url =
  "https://scontent-iad3-1.cdninstagram.com/vp/a29809efa95a05aa3b65d296c5b3e74e/5CEBFBD2/t51.2885-15/e35/37563340_239069136804174_7711342754646720512_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com";
//

const Purchases = props => {
  const { cart, user, removePurchase, cleareCart } = props;

  if (!cart) return null;

  const removeItem = key => () => {
    removePurchase(key, user);
  };

  const buy = () => {
    window.open(url);
    cleareCart(user);
  };

  const cleare = () => cleareCart(user);

  return (
    <Wrapper>
      {cart.length > 0 && (
        <Fragment>
          <ButtonControl onClick={cleare}>Clear</ButtonControl>
          <ButtonControl onClick={buy} colorBg="rgb(77,144,6)">
            Buy
          </ButtonControl>
        </Fragment>
      )}
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
  removePurchase: (key, user) => dispatch(removePurchaseFromCart(key, user)),
  cleareCart: user => dispatch(cleareCart(user))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Purchases);
