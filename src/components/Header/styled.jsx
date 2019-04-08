import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  background: #2196f3;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  padding: 15px;
`
export const MyLogo = styled.div`
  flex-grow: 1;
  position: relative;
  img {
    height: 40px;
    cursor: pointer;
  }
`
export const MyButton = styled.div`
  padding: 6px 16px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: 250ms;
  border-radius: 4px;
  text-transform: uppercase;
  user-select: none;
  cursor: pointer;
  :hover {
    background: #00000014;
  }
  :active {
    background: #ffffff2b;
  }
`
export const MyButtonCyrcle = styled.div`
  padding: 6px 16px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: 250ms;
  border-radius: 4px;
  text-transform: uppercase;
  user-select: none;
  cursor: pointer;
  :hover {
    background: #00000014;
  }
  :active {
    background: #ffffff2b;
  }
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
export const User = styled.div`
  display: flex;
  align-items: center;
`
export const Row = styled.div`
  display: flex;
`