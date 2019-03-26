import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`
export const Wrapper = styled.div`
  min-height: calc(100vh - 144px);
`

export const List = styled.div``

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
  background: #0e3d88d1;
  border-radius: 0 20px 20px 0;
  margin: 10px 0;
  margin-right: 10px;
  color: #fff;
`

export const MyImage = styled.img`
  padding: 0px 30px;
  width: 50%;
  height: 100%;
`

export const LeftRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
`

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
`
export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 50px;
`

export const MyButton = styled.button`
  cursor: pointer;
  border: none;
  box-shadow: none;
  background: #111;
  color: #fff;
  font-size: 30px;
  border-radius: 10px;
  padding: 10px 20px;
`
