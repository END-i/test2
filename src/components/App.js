import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { getProdcutsData } from "../actions/actionGetData";
import Callback from "./Callback";
import NotFound from "./NotFound/NotFound";
import Wrapper from "./Wrapper";

import Auth from "../Auth";

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  console.log(location);
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

class App extends Component {
  state = { products: null };

  static getDerivedStateFromProps(props, state) {
    if (props.products) {
      return { products: props.products };
    }
    return null;
  }

  componentDidMount() {
    this.props.getProdcuts();
  }

  render() {
    const { products } = this.state;

    if (!products) {
      return <Callback />;
    }

    return (
      <Switch>
        <Redirect exact from="/" to="/product" />
        <Route path="/product/" component={Wrapper} />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback />;
          }}
        />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.productsData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProdcuts: () => dispatch(getProdcutsData())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
