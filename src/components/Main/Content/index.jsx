import React, { Component } from "react";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductsList";
import { Route, Switch, Redirect } from "react-router-dom";

class Content extends Component {
  state = {};

  render() {
    return (
      <div style={{ minHeight: "calc(100vh - 134px)" }}>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/:id" component={ProductDetails} />
          <Redirect from="*" exact to="/" />
        </Switch>
      </div>
    );
  }
}

export default Content;
