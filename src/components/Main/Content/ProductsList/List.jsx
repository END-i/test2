import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import GridLayout from "./layout/GridLayout";
import ListLayout from "./layout/ListLayout";

class List extends Component {
  state = { list: true };

  static getDerivedStateFromProps(props, state) {
    return { list: props.toggleList };
  }

  render() {
    const { data } = this.props;
    const { list } = this.state;

    return (
      <Fragment>
        {list && <ListLayout data={data} />}
        {!list && <GridLayout data={data} />}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    toggleList: state.toggleList
  };
};

export default withRouter(connect(mapStateToProps)(List));
