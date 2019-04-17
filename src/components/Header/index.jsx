import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Wrapper, MyButton, MyLogo } from "./styled";

import { openCloseModal } from "../../store/modalWindowAuth/actions";
import { toggleViewProducts } from "../../store/viewProducts/actions";

import AuthUser from "./AuthUser";
//

const Header = props => {
  const { openModal, user, toggleViewProducts, viewProducts } = props;
  return (
    <Wrapper>
      <MyLogo>
        <Link to="/">
          <img src={require("./assets/car.png")} alt="" />
          <img src={require("./assets/car1.png")} alt="" />
        </Link>
      </MyLogo>
      <MyButton onClick={() => toggleViewProducts(!viewProducts)}>
        Toggle view
      </MyButton>

      {user ? (
        <AuthUser />
      ) : (
        <MyButton onClick={() => openModal(true)}>Sign In</MyButton>
      )}
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  user: state.authorizationStatus,
  viewProducts: state.viewProducts
});

const mapDispatchToProps = dispatch => ({
  openModal: bool => dispatch(openCloseModal(bool)),
  toggleViewProducts: bool => dispatch(toggleViewProducts(bool))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
