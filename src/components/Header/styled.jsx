import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  border-bottom: 2px solid #fff;
  margin: 0 20px;
  margin-bottom: 40px;
`

export const Cart = styled.div`
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
  small {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #111;
    background: #fff;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    font-size: 16px;
    left: 30px;
    top: 15p;
  }
`
export const MyLogo = styled.img`
  cursor: pointer;
  width: 50px;
  opacity: 0.5;
  transition: 0.3s;
  :hover {
    opacity: 1;
  }
  :active {
    opacity: 1;
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

export const User = styled.div`
  display: flex;
  align-items: center;
`
export const Row = styled.div`
  display: flex;
`