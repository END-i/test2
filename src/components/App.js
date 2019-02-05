import React, { Component, Fragment } from "react";
import Main from "./Main";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProdcutsData } from "../actions/actionGetData";
import { GetDataProvider } from "./ProductData";

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

  getData = () => {
    console.log("1");
  };

  render() {
    const loading = (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "100px"
        }}
      >
        LOADING . . .
      </div>
    );

    return (
      <Fragment>
        {this.state.products ? (
          <GetDataProvider value={this.state.products}>
            <Main />
          </GetDataProvider>
        ) : (
          loading
        )}
      </Fragment>
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
