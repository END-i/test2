import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleCartList } from "../../../actions/actionToggleCartList";
import { addToCart } from "../../../actions/actionAddToCart";

import EmptyCart from "./EmptyCart";
import CartLi from "./CartLi";
import MyButton from "../ProductList/styled/MyButton";

class Cart extends Component {
  myRefCart = node => {
    this.cartRef = node;
  };

  closeCartList = event => {
    const { cartList, toggleCartList } = this.props;
    if (this.cartRef && !this.cartRef.contains(event.target)) {
      toggleCartList(!cartList);
    }
  };

  componentDidMount() {
    document.addEventListener("click", this.closeCartList);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.closeCartList);
  }

  buyProduct = () => {
    const url =
      "https://www.google.com/search?ei=sVJlXMX1C-7srgSd676oAQ&q=%D0%BF%D0%BE%D1%80%D0%B0+%D0%BF%D0%BB%D0%B0%D1%82%D0%B8%D1%82%D1%8C+%D0%BF%D0%BE+%D1%81%D1%87%D0%B5%D1%82%D0%B0%D0%BC&oq=gjhf+ghfkbnm+gj&gs_l=psy-ab.3.0.0i13i30.20091.22178..23066...0.0..0.123.1353.11j4....2..0....1..gws-wiz.......0i71j35i39j0j0i131j0i10i1i67i42j0i10i1j0i1j0i10i1i42j0i10j0i22i10i30j0i13j33i160j0i13i5i30.4REsPL5WBak";
    window.open(url);
  };

  toEmptyCart = () => {
    this.props.addToCart("");
  };

  render() {
    const { cartData, cartList } = this.props;
    const { toEmptyCart, myRefCart, buyProduct } = this;

    return (
      <div
        style={{
          position: "fixed",
          zIndex: "999",
          background: "rgba(0, 0, 0, 0.5)",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }}
      >
        <div
          className={cartList ? "" : "none"}
          style={{
            position: "fixed",
            background: "#fff",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            margin: "150px",
            zIndex: "1000",
            overflow: "auto",
            padding: "0 20px"
          }}
          ref={myRefCart}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "20px 0"
            }}
          >
            <MyButton color1="#ce5252" color2="#6f3939" onClick={buyProduct}>
              <b style={{ fontSize: "20px" }}>Buy</b>
            </MyButton>

            <MyButton color1="#bfbfbf" color2="#111" onClick={toEmptyCart}>
              <b style={{ fontSize: "20px" }}>Empty shopping cart</b>
            </MyButton>
          </div>
          {cartData.length > 0 ? <CartLi cart={cartData} /> : <EmptyCart />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartData: state.cartData,
    cartList: state.cartList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleCartList: bool => dispatch(toggleCartList(bool)),
    addToCart: car => dispatch(addToCart(car))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart)
);
