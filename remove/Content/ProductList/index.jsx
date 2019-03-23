import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import GridLayout from "./layout/GridLayout";
import ListLayout from "./layout/ListLayout";

class ProductList extends Component {
  state = { list: true };

  static getDerivedStateFromProps(props) {
    return { list: props.toggleList };
  }

  render() {
    const { products } = this.props;
    const { list } = this.state;

    return (
      <Fragment>
        {list && <ListLayout data={products} />}
        {!list && <GridLayout data={products} />}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    toggleList: state.toggleList,
    products: state.productsData
  };
};

export default withRouter(connect(mapStateToProps)(ProductList));
