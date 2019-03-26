import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {
  Wrapper,
  CloseButton,
  List,
  ListItem,
  Form,
  MyInput,
  MyButton,
} from './styled'
import { openCloseModalWindow } from '../../store/modalWindow/actions'

import firebase, { auth } from '../../firebase'

const AuthModal = ({ modalWindow, closeModal }) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const signInWithPopup = provider =>
    auth
      .signInWithPopup(provider)
      .then(user => console.log('sing in wiht popup: success', user))
      .catch(error => console.log('sing in wiht popup: success', error))

  const LogInGoogle = () => {
    console.log('log in google')
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

  const LogInEmail = () => {
    console.log('log in email')

    const { email, password } = this.state
    console.log('click create user')
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response)
        this.setState({ email: '', password: '' })

        firebase
          .auth()
          .currentUser.sendEmailVerification()
          .then(data => {
            console.log(data)
          })
          .catch(error => {
            console.log(error)
          })
      })
      .catch(error => console.log(error))
  }

  const LogInTwitter = () => {
    console.log('log in twiter')
  }

  const LogInGithub = () => {
    console.log('log in github')
    const provider = new firebase.auth.GithubAuthProvider()
    signInWithPopup(provider)
      .then(result => console.log('sing in github: success', result))
      .catch(error => console.log('sing in github: error', error))
  }

  const checkUser = () => {
    console.log('click check user')
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log(
          'user logged: ',
          user.displayName,
          user.email,
          user.emailVerified
        )
      } else {
        console.log('no user logged')
      }
    })
  }
  return (
    <Wrapper display={modalWindow ? 'flex' : 'none'}>
      <List>
        <CloseButton onClick={() => closeModal(false)}>X</CloseButton>
        <ListItem onClick={LogInGoogle}>GOOGLE</ListItem>
        <ListItem onClick={LogInFacebook}>FACEBOOK</ListItem>
        <ListItem onClick={LogInGithub}>GITHUB</ListItem>
        {/* <ListItem onClick={LogInTwitter}>TWITTER</ListItem> */}
        <ListItem onClick={LogInEmail}>EMAIL</ListItem>
        <Form>
          <MyInput type="text" placeholder="login" required={true} />
          <MyInput type="email" placeholder="email" required={true} />
          <MyInput type="text" placeholder="password" required={true} />
          <MyButton>SEND</MyButton>
        </Form>
        Check USER:
        <button onClick={checkUser}>press</button>
      </List>
    </Wrapper>
  )
}

const mapStateToProps = state => ({
  modalWindow: state.modalWindow,
})

const mapDispatchToProps = dispatch => ({
  closeModal: bool => dispatch(openCloseModalWindow(bool)),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthModal)
)
