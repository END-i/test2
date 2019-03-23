import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  display: ${({ display }) => display};
  opacity: ${({ visibility }) => visibility};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  transition: 0.5s;
`

export const Image = styled.img`
  margin: auto;
`
