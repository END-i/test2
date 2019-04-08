import styled from "styled-components";

export const Wrapper = styled.div`
  display: ${({ display }) => display};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #0a4863cf;
  margin: auto;
`;
export const Window = styled.div`
  position: relative;
  margin: auto;
  padding: 32px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  background-color: #2196f3;
`;
export const MyButton = styled.div`
  font-size: 25px;
  display: flex;
  align-items: center;
  margin: 20px 0;
  padding: 6px 16px;
  border-radius: 4px;
  color: #fff;
  font-weight: 500;
  transition: 0.3s;
  text-transform: uppercase;
  user-select: none;
  cursor: pointer;
  :hover {
    background: #00000014;
  }
  :active {
    background: #ffffff2b;
  }
  img:first-of-type {
    margin-right: 20px;
  }
`;
export const CloseButton = styled.span`
  position: absolute;
  width: 30px;
  height: 30px;
  right: -30px;
  top: -30px;
  font-size: 25px;
  text-align: center;
  background: #00000080;
  color: #fff;
  opacity: 0.5;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  border-radius: 100%;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    opacity: 1;
  }
  :active {
    transform: scale(0.9);
  }
`;
export const Divider = styled.div`
  border-bottom: 2px solid #fff;
  position: relative;
  margin: 40px 0;
  span {
    color: #fff;
    position: absolute;
    left: 25%;
    top: -15px;
    background: #2196f3;
    padding: 0 10px;
    font-size: 25px;
  }
`;
