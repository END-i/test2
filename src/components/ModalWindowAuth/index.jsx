import React from "react";
import { connect } from "react-redux";

import { Wrapper, Window, CloseButton, MyButton, Divider } from "./styled";

import { openCloseModal } from "../../store/modalWindowAuth/actions";
import { signIn } from "../../store/authorizationStatus/actions";

import firebase, { auth } from "../../firebase";

const ModalWindowAuth = ({ modalWindowAuth, openCloseModal, signIn }) => {
  const display = modalWindowAuth ? "flex" : "none";

  const signInWithPopup = provider =>
    auth
      .signInWithPopup(provider)
      .then(user => {
        console.log("sing in wiht popup: success", user);
        signIn(user);
        openCloseModal(false)
      })
      .catch(error => console.log("sing in wiht popup: success", error));

  const GoogleAuth = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    signInWithPopup(provider);
  };

  const FacebookAuth = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    signInWithPopup(provider);
  };

  return (
    <Wrapper display={display}>
      <Window>
        <CloseButton onClick={() => openCloseModal(false)}>X</CloseButton>
        <MyButton onClick={GoogleAuth}>
          <img src={require("./media/google-plus.png")} alt="" />
          Google
        </MyButton>
        <MyButton onClick={FacebookAuth}>
          <img src={require("./media/facebook.png")} alt="" />
          FaceBook
        </MyButton>
        <Divider>
          <span>OR</span>
        </Divider>
        <MyButton>
          <img
            src={require("./media/email-black-circular-button.png")}
            alt=""
          />
          Email || Password
          <img src={require("./media/Kartinki_17_03095305.png")} alt="" />
        </MyButton>
      </Window>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  modalWindowAuth: state.modalWindowAuth
});

const mapDispatchToProps = dispatch => ({
  openCloseModal: bool => dispatch(openCloseModal(bool)),
  signIn: user => dispatch(signIn(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalWindowAuth);
