import styled from 'styled-components'

export const MyButton = styled.button`
  padding: 10px 15px;
  font-size: 14px;
  margin: 5px;
  border: none;
  background: linear-gradient(
    ${props => props.color1} 0%,
    ${props => props.color2} 50%
  );
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
  text-shadow: 0px 1px 1px #111;
  :hover {
    color: #fff;
    background: linear-gradient(
      ${props => props.color1} 0%,
      ${props => props.color2} 100%
    );
  }
  :active {
    background: linear-gradient(
      ${props => props.color2} 0%,
      ${props => props.color1} 50%
    );
  }
`

export const SaleTag = styled.b`
  position: absolute;
  top: 65px;
  left: -30px;
  background: linear-gradient(#75e000 0%, #517925 50%);
  color: #ffffff;
  text-shadow: 0px 1px 1px #000;
  width: 100px;
  padding: 4px 15px;
  border-radius: 3px;
`
