import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleCartList } from "../../../../actions/actionToggleCartList";
import EmptyCart from "./EmptyCart";
import CartLi from "./CartLi";

class Cart extends Component {
  myRefCart = node => {
    this.cartRef = node;
  };

  closeCartList = event => {
    const { cartList, toggleCartList } = this.props;
    console.log(cartList);
    if (this.cartRef && !this.cartRef.contains(event.target)) {
      console.log(cartList);
      toggleCartList(!cartList);
    }
  };

  componentDidMount() {
    document.addEventListener("click", this.closeCartList);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.closeCartList);
  }

  render() {
    const { cartData, cartList } = this.props;

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
          ref={this.myRefCart}
        >
          {cartData.length > 0 ? <CartLi cart={cartData} /> : <EmptyCart />}
        </div>
        <div>
          <button>BUY</button>
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
    toggleCartList: bool => dispatch(toggleCartList(bool))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart)
);
