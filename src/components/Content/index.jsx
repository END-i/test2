import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";
import Cart from "./Cart";
import NoLog from "./NoLog/NoLog";

class Content extends Component {
  render() {
    const style = {
      minHeight: "calc(100vh - 134px)",
      padding: "0 20px 50px",
      position: "relative"
    };
    const logged = localStorage.isLoggedIn;
    return (
      <div style={style}>
        {this.props.cartList && <Cart />}
        <Switch>
          <Route exact path="/product/" component={ProductList} />
          <Route
            exact
            path="/product/:id"
            render={() => {
              if (logged) return <ProductDetails />;
              return <NoLog />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartList: state.cartList
  };
};

export default withRouter(connect(mapStateToProps)(Content));
