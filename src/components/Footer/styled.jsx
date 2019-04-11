import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  box-shadow: 0px -2px 5px 0px rgba(0,0,0,0.5);
  color: #fff;
  background: #2196f3;
  padding: 10px 0;
  img{
    height: inherit;
  }
  span{
    font-size: 30px;
    font-weight: 800;
    margin-right: 20px;
  }
`