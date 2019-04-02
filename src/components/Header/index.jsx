import React from 'react'

import { Wrapper, Cart, MyButton,MyButtonCyrcle,  MyLogo, User, Row,  } from './styled'

const Header = () => {
  return (
    <Wrapper>
      <MyLogo>
        <img src={require('./media/logo2.png')} alt="" />
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
