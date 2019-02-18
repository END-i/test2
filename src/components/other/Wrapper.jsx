import React, { Component, Fragment } from "react";
import Main from "../Main";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProdcutsData } from "../../actions/actionGetData";
import { GetDataProvider } from "./ProductData";
import Callback from "../Callback";

class Wrapper extends Component {
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
    return (
      <Fragment>
        {this.state.products ? (
          <GetDataProvider value={this.state.products}>
            <Main />
          </GetDataProvider>
        ) : (
          <Callback />
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
  )(Wrapper)
);
