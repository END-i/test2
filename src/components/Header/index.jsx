import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { toggleViewProducts } from '../../store/viewProducts/actions'
import { openCloseModalWindow } from '../../store/modalWindow/actions'
import { cleanUser } from '../../store/authorizationStatus/actions'

import { Wrapper, Cart, MyButton, MyLogo, User, Row } from './styled'

import { auth } from '../../firebase'

const Header = ({ toggleView, viewProducts, openModal, user, cleanUser }) => {
  const [userName, setUserName] = useState('')

  const path = window.location.pathname

  const logOut = () => {
    auth
      .signOut()
      .then(result => console.log(result, 'sing out: success'))
      .catch(error => console.log(error, 'sing out: error'))
    cleanUser()
  }

  useEffect(() => {
    let name
    if (user) name = user.displayName ? user.displayName : 'test-user'

    setUserName(name || 'No Logged')
  })

  return (
    <Wrapper>
      <Link to="/" style={{ margin: 'auto 0' }}>
        <MyLogo src={require('./steering-wheel.png')} alt="" />
      </Link>

      <Row>
        <User>{user ? `Welcome ${userName}` : `You must be logged`}</User>
        <Row className={path === '/' ? 'block' : 'none'}>
          <MyButton
            onClick={() => toggleView(true)}
            className={viewProducts && 'none'}
          >
            <i className="fas fa-list" />
          </MyButton>
          <MyButton
            onClick={() => toggleView(false)}
            className={!viewProducts && 'none'}
          >
            <i className="fas fa-th" />
          </MyButton>
        </Row>
        <Cart className={!user && 'none'}>
          <small> 12 </small>
          <i className="fas fa-shopping-cart" />
        </Cart>
        <MyButton onClick={logOut} className={!user && 'none'}>
          Log Out
        </MyButton>
        <MyButton onClick={() => openModal(true)} className={user && 'none'}>
          Log In
        </MyButton>
      </Row>
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleView: bool => dispatch(toggleViewProducts(bool)),
  openModal: bool => dispatch(openCloseModalWindow(bool)),
  cleanUser: () => dispatch(cleanUser()),
})

const mapStateToProps = state => ({
  viewProducts: state.viewProducts,
  user: state.authorizationStatus,
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
)
