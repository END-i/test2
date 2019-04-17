import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 60px;
  color: #fff;
  background: #2196f3;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  padding: 5px 15px;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 1200px;
  box-sizing: border-box;
`;
export const MyLogo = styled.div`
  flex-grow: 1;
  position: relative;
  transition: 0.3s;
  margin-left: ${({ margin }) => margin || 0};
  img {
    height: 70px;
    cursor: pointer;
    z-index: 1;
  }
  img:last-child {
    opacity: 0;
    transition: all 1s ease-out 0.1s;
  }
  img:first-child:hover ~ img:last-of-type {
    opacity: 1;
  }
`;
export const MyButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 16px;
  min-height: 60px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
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
  img {
    max-width: 50px;
    border-radius: ${({ radius }) => radius || "none"};
    margin-left: 15px;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
`;
export const Row = styled.div`
  display: flex;
`;
export const Cart = styled.div`
  position: relative;
  span {
    color: #fff;
    background: #ff0101;
    width: 20px;
    text-align: center;
    border-radius: 100%;
    font-size: 18px;
    font-weight: 700;
    position: absolute;
    top: -10px;
    right: -5px;
  }
  img {
    width: 30px;
    margin: 0;
  }
`;
