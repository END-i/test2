import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import MyButton from "./MyButton";
import { actionToggleList } from "../../../actions/actionToggleList";
import { toggleCartList } from "../../../actions/actionToggleCartList";
import MyLogo from "./MyLogo";

class Hedaer extends Component {
  state = { list: true };

  listActive = bool => () => {
    this.setState({ list: bool });
    this.props.actionToggleList(bool);
  };

  cartList = () => {
    console.log(this.props.cartData);
    this.props.toggleCartList(true);
  };

  render() {
    const { list } = this.state;
    const { listActive, cartList } = this;
    const url = window.location.pathname;

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
          <div
            className={url === "/" ? "" : "none"}
            style={{ display: "flex" }}
          >
            <MyButton className={list && "active"} onClick={listActive(true)}>
              <i className="fas fa-list" />
            </MyButton>
            <MyButton className={!list && "active"} onClick={listActive(false)}>
              <i className="fas fa-th" />
            </MyButton>
          </div>
          <MyButton onClick={cartList}>
            <small
              style={{
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#111",
                background: "#fff",
                borderRadius: "100%",
                width: "20px",
                height: "20px",
                fontSize: "16px",
                left: "30px",
                top: "15px"
              }}
            >
              {this.props.cartData.length}
            </small>
            <i className="fas fa-shopping-cart" />
          </MyButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    toggleList: state.toggleList,
    cartData: state.cartData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actionToggleList: bool => dispatch(actionToggleList(bool)),
    toggleCartList: bool => dispatch(toggleCartList(bool))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Hedaer)
);
