import React from 'react'
import { Link } from 'react-router-dom'

import { Wrapper, MyButton, MyButtonCyrcle, MyLogo } from './styled'

const Header = () => {
  return (
    <Wrapper>
      <MyLogo>
        <Link to="/">
          <img src={require('./media/logo2.png')} alt="" />
        </Link>
      </MyLogo>

      <MyButtonCyrcle>
        <img
          src={require('./media/round-account-button-with-user-inside-white.png')}
          alt=""
        />
      </MyButtonCyrcle>
      <MyButton>Toggle view</MyButton>
      <MyButton>Sing In/Sing Out</MyButton>
    </Wrapper>
  )
}

export default Header
