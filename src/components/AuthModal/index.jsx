import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {
  Wrapper,
  CloseButton,
  List,
  ListItem,
  SocialIcon,
} from './styled'

import { openCloseModalWindow } from '../../store/modalWindow/actions'
import { setUser } from '../../store/authorizationStatus/actions'

import firebase, { auth } from '../../firebase'

const AuthModal = ({ modalWindow, closeModal }) => {
  const signInWithPopup = provider =>
    auth
      .signInWithPopup(provider)
      .then(user => {
        console.log('sing in wiht popup: success', user)
        setUser(user)
      })
      .catch(error => console.log('sing in wiht popup: success', error))

  const LogInGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    signInWithPopup(provider)
      .then(result => console.log('sing in google: success', result))
      .catch(error => console.log('sing in google: error', error))
  }

  const LogInFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider()
    signInWithPopup(provider)
      .then(result => console.log('sing in facebook: success', result))
      .catch(error => console.log('sing in facebook: error', error))
  }

  const LogInGithub = () => {
    const provider = new firebase.auth.GithubAuthProvider()
    signInWithPopup(provider)
      .then(result => console.log('sing in github: success', result))
      .catch(error => console.log('sing in github: error', error))
  }

  return (
    <Wrapper display={modalWindow ? 'flex' : 'none'}>
      <List>
        <CloseButton onClick={() => closeModal(false)}>X</CloseButton>
        <ListItem onClick={LogInGoogle}>
          GOOGLE
          <SocialIcon src={require('./google-plus.png')} alt="" />
        </ListItem>
        <ListItem onClick={LogInFacebook}>
          FACEBOOK
          <SocialIcon src={require('./github.png')} alt="" />
        </ListItem>
        <ListItem onClick={LogInGithub}>
          GITHUB
          <SocialIcon src={require('./facebook.png')} alt="" />
        </ListItem>
      </List>
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => ({
  closeModal: bool => dispatch(openCloseModalWindow(bool)),
  setUser: user => dispatch(setUser(user)),
})

const mapStateToProps = state => ({
  modalWindow: state.modalWindow,
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthModal)
)
