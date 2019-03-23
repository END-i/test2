import styled from "styled-components";

const MyLogo = styled.h2`
  cursor: pointer;
  margin: 0;
  color: #9e9e9e;
  user-select: none;
  &: hover {
    color: #5f5f61;
  }
  &: active {
    color: #111;
  }
`;
export default MyLogo;
