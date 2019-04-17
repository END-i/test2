import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { MyButton, Cart } from "./styled";

import { cleanUser } from "../../store/authorizationStatus/actions";
import { getCartPurchase } from "../../store/cart/actions";
import { cleareCart } from "../../store/cart/actions";

import { auth } from "../../firebase";
//

const AuthUser = props => {
  const { user, signOut, cart, getCartPurchase, cleareCart } = props;
  const avatar = require("./media/round-account-button-with-user-inside-white.png");

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        window.location = "/";
        setTimeout(() => {
          signOut();
          cleareCart(user);
        }, 500);
      })
      .catch(error => console.log("log out: error", error));
  };

  useEffect(() => {
    if (!cart && user.uid) {
      getCartPurchase(user);
    }
  });

  return (
    <Fragment>
      <Link to="/cart">
        <MyButton>
          <Cart>
            <img src={require("./media/shopping-cart.png")} alt="" />
            <span>{cart && cart.length > 0 && cart.length}</span>
          </Cart>
        </MyButton>
      </Link>
      <MyButton radius="100%">
        <h5>{user.displayName || "Anonymous"}</h5>
        <img src={user.photoURL || avatar} alt="" />
      </MyButton>
      <MyButton onClick={handleSignOut}>Sign Out</MyButton>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  user: state.authorizationStatus,
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(cleanUser()),
  getCartPurchase: user => dispatch(getCartPurchase(user)),
  cleareCart: user => dispatch(cleareCart(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthUser);
