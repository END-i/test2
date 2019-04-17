import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Wrapper, Window, CloseButton, MyButton, Divider } from "./styled";

import { openCloseModal } from "../../store/modalWindowAuth/actions";
import { signIn } from "../../store/authorizationStatus/actions";

import firebase, { auth } from "../../firebase";
//
//

const ModalWindowAuth = props => {
  const { modalWindowAuth, openCloseModal, signIn } = props;

  const [isOpacity, setIsOpacity] = useState(0);
  const [isDisplay, setIsDisplay] = useState("");

  const closeModal = () => {
    openCloseModal(false);
    setIsOpacity(0);
    setTimeout(() => {
      setIsDisplay("none");
    }, 500);
  };

  useEffect(() => {
    if (modalWindowAuth) {
      setIsDisplay("flex");
      setTimeout(() => {
        setIsOpacity(1);
      }, 100);
    }
  });

  const signInWithPopup = provider =>
    auth
      .signInWithPopup(provider)
      .then(user => {
        console.log("sing in wiht popup: success", user);
        signIn(user);
        closeModal();
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
    <Wrapper display={isDisplay} opacity={isOpacity}>
      <Window>
        <CloseButton onClick={closeModal}>X</CloseButton>
        <MyButton onClick={GoogleAuth}>
          <img src={require("./assets/google-plus.png")} alt="" />
          Google
        </MyButton>
        <MyButton onClick={FacebookAuth}>
          <img src={require("./assets/facebook.png")} alt="" />
          FaceBook
        </MyButton>
        <Divider>
          <span>OR</span>
        </Divider>
        <MyButton>
          <img
            src={require("./assets/email-black-circular-button.png")}
            alt=""
          />
          Email || Password
          <img src={require("./assets/Kartinki_17_03095305.png")} alt="" />
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
