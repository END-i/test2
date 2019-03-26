import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  display: ${({ display }) => display || 'flex'};
  justify-content: center;
  align-items: center;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #d8d8d854;
`

export const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 15px;
  top: 15px;
  color: #d67f7f;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 100%;
  background: #fff;
  width: 30px;
  height: 30px;
`

export const List = styled.ul`
  position: relative;
  background: #111;
  padding: 50px;
`

export const ListItem = styled.li`
  color: #fff;
  margin: 50px;
  font-size: 25px;
  border: 2px solid #fff;
  padding: 5px 15px;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const MyInput = styled.input`
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
`
export const MyButton = styled.button`
  font-size: 25px;
  padding: 10px;
`
export const SocialIcon = styled.img`
  width: 30px;
  margin-left: 25px;
`
