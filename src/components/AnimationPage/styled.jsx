import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: inherit;
  opacity: ${({ opacity }) => opacity || 0};
  transition: 1s;
`;
