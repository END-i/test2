import styled from "styled-components";

const MyButton = styled.div`
  font-size: 30px;
  margin: auto 10px;
  padding: 0px 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.2s;
  background: #f9f4f4;
  color: #696767;
  text-shadow: 0px 0px 1px #111;
  &: hover {
    background: #c3c3c3;
  }
  &: active {
    background: #696767;
    color: #f9f4f4;
  }
  &.active {
    color: #f9f4f4;
    background: #696767;
  }
  &.active: hover {
    background: #9c9c9c;
  }
  &.active: active {
    background: #e2e2e2;
    color: #717171;
  }
`;

export default MyButton;
