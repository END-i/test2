import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 5px 30px;
  color: #fff;
`
export const MessageWrapper = styled.div`
  display: ${({ display }) => display};
  background: ${({ color }) =>
    color === 'error'
      ? '#b54c4cd6'
      : color === 'info'
      ? '#3d3ddcd6'
      : color === 'process'
      ? '#359e1ed6'
      : '#111'};
  padding: 5px 20px;
  border-radius: 10px;
  color: #000;
  margin: 10px;
  p {
    background: #ffffff7a;
  }
`
