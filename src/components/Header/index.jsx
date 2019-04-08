import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Wrapper, MyButton, MyButtonCyrcle, MyLogo } from "./styled";

import { openCloseModal } from "../../store/modalWindowAuth/actions";
import { cleanUser } from "../../store/authorizationStatus/actions";

const Header = ({ openModal, signOut, user }) => {
  return (
    <Wrapper>
      <MyLogo>
        <Link to="/">
          <img src={require("./media/logo2.png")} alt="" />
        </Link>
      </MyLogo>

      <MyButtonCyrcle>
        <img
          src={require("./media/round-account-button-with-user-inside-white.png")}
          alt=""
        />
      </MyButtonCyrcle>
      <MyButton>Toggle view</MyButton>
      {user ? (
        <MyButton onClick={() => signOut()}>Sing Out</MyButton>
      ) : (
        <MyButton onClick={() => openModal(true)}>Sing In</MyButton>
      )}
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  user: state.authorizationStatus
});
const mapDispatchToProps = dispatch => ({
  openModal: bool => dispatch(openCloseModal(bool)),
  signOut: () => dispatch(cleanUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
