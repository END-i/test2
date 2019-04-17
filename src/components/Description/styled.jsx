import styled from "styled-components";
//

export const Wrapper = styled.div`
  background: #00000010;
  flex-grow: 1;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  img {
    max-width: 80%;
    margin: 0 auto;
  }
`;
//

export const RightColumn = styled.div`
  color: #fff;
`;
//

export const Price = styled.h1`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: ${({ width }) => width || "fit-content"};
  color: green;
  background: #0000002e;
  margin: 0 auto;
  padding: 15px 15px;
`;
//

export const MyButton = styled.div`
  padding: 10px 15px;
  margin: 5px 0;
  font-size: 1.3rem;
  font-weight: 700;
  transition: 250ms;
  border-radius: 4px;
  text-transform: uppercase;
  user-select: none;
  cursor: pointer;
  color: #fff;
  background: rgba(77, 144, 6, 0.5);
  text-align: center;
  :hover {
    background: rgb(77, 144, 6);
    transform: scale(1.05);
  }
  :active {
    background: rgba(0, 0, 0, 0.1);
    transform: scale(0.9);
  }
`;
//

export const Specifications = styled.div`
  margin-top: 50px;
  border-top: 2px solid #ffffff21;
  padding: 5px;
  ul {
    font-size: 25px;
  }
  ul li {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #00000021;
  }
`;
