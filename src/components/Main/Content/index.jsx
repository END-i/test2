import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductsList";
import Cart from "./Cart";
import { Route, Switch, Redirect } from "react-router-dom";

class Content extends Component {
  state = {};

  render() {
    return (
      <div
        style={{
          minHeight: "calc(100vh - 134px)",
          padding: "0 20px",
          position: "relative"
        }}
      >
        {this.props.cartList && <Cart />}
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/:id" component={ProductDetails} />
          <Redirect from="*" exact to="/" />
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
