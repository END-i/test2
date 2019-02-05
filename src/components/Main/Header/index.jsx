import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import MyButton from "./MyButton";
import { actionToggleList } from "../../../actions/actionToggleList";
import MyLogo from "./MyLogo";

class Hedaer extends Component {
  state = { list: true };

  listActive = bool => () => {
    this.setState({ list: bool });
    this.props.actionToggleList(bool);
  };

  render() {
    const { list } = this.state;
    const { listActive } = this;

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "60px",
          borderBottom: "2px solid #fff",
          margin: "0 20px",
          marginBottom: "40px"
        }}
      >
        <Link to="/" style={{ margin: "auto 0" }}>
          <MyLogo>Our Products</MyLogo>
        </Link>
        <div style={{ display: "flex" }}>
          <MyButton className={list && "active"} onClick={listActive(true)}>
            <i className="fas fa-list" />
          </MyButton>
          <MyButton className={!list && "active"} onClick={listActive(false)}>
            <i className="fas fa-th" />
          </MyButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    toggleList: state.toggleList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actionToggleList: bool => dispatch(actionToggleList(bool))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Hedaer)
);
