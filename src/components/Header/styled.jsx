import styled from 'styled-components'

export const MyLogo = styled.h2`
  cursor: pointer;
  margin: 0;
  color: #9e9e9e;
  user-select: none;
  :hover {
    color: #5f5f61;
  }
  :active {
    color: #111;
  }
`

export const MyButton = styled.div`
  position: relative;
  font-size: 30px;
  margin: auto 10px;
  padding: 0px 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.2s;
  color: #696767;
  text-shadow: 0px 0px 1px #111;
  :hover {
    text-shadow: none;
  }
  :active {
    text-shadow: none;
    background: #696767;
    color: #f9f4f4;
  }
  .active {
    color: #f9f4f4;
    background: #9c9c9c;
  }
  .active:hover {
    background: #696767;
  }
  .active:active {
    color: #696767;
    background: none;
  }
`
