import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { MyButton, MyLogo } from './styled'

class Hedaer extends Component {
  state = { list: true }

  logIn = () => {
    console.log('log in')
  }

  logOut = () => {
    console.log('log out')
  }

  listActive = bool => () => {
    this.setState({ list: bool })
    console.log('list active')
  }

  cartList = () => {
    console.log('cart list')
  }

  render() {
    const { list } = this.state
    const { listActive, cartList, logIn, logOut } = this
    const url = window.location.pathname

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '60px',
          borderBottom: '2px solid #fff',
          margin: '0 20px',
          marginBottom: '40px',
        }}
      >
        <Link to="/" style={{ margin: 'auto 0' }}>
          <MyLogo>Our Products</MyLogo>
        </Link>
        <div style={{ display: 'flex' }}>
          <div
            className={url === '/product/' ? '' : 'none'}
            style={{ display: 'flex' }}
          >
            <MyButton className={list && 'active'} onClick={listActive(true)}>
              <i className="fas fa-list" />
            </MyButton>
            <MyButton className={!list && 'active'} onClick={listActive(false)}>
              <i className="fas fa-th" />
            </MyButton>
          </div>
          <MyButton onClick={cartList}>
            <small
              style={{
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#111',
                background: '#fff',
                borderRadius: '100%',
                width: '20px',
                height: '20px',
                fontSize: '16px',
                left: '30px',
                top: '15px',
              }}
            >
              12
            </small>
            <i className="fas fa-shopping-cart" />
          </MyButton>
          <MyButton onClick={logOut}>Log Out</MyButton>
          <MyButton onClick={logIn}>Log In</MyButton>
        </div>
      </div>
    )
  }
}

export default Hedaer
