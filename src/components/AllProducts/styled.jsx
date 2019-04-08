import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const Wrapper = styled.div`
  width: 100%;
`;

export const List = styled.div``;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
  background: #2196f3ba;
  border-radius: 0 20px 20px 0;
  margin: 10px 0;
  margin-right: 10px;
  color: #fff;
  box-shadow: 0px 2px 4px -1px #00000033, 0px 4px 5px 0px #00000024,
    0px 1px 10px 0px #0000001f;
`;
export const GridWrapper = styled.div`
  margin: 10px;
  padding: 10px;
  align-self: auto;
  background: #ffffff29;
  width: 200px;
  transition: 0.3s;
  :hover{
    transform: scale(1.01);
  }
  h1 {
    margin-bottom: 0;
  }
  h2:first-of-type {
    margin: 0;
  }
`;
export const MyImage = styled.img`
  padding: ${({ padding }) => padding || "0px 30px"};
  width: 200px;
`;

export const LeftRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    margin-bottom: 0;
  }
  h2 {
    margin-top: 0;
  }
`;
export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 50px;
`;

export const MyButton = styled.div`
  padding: 10px 15px;
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
export const Price = styled.h2`
  color: rgb(175, 216, 25);
  background: #00000030;
  padding: 10px 20px;
  width: 150px;
  text-align: center;
`;
