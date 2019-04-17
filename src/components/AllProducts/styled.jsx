import styled from "styled-components";
//

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
//

export const Wrapper = styled.div`
  width: 100%;
`;
//

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
  background: #2196f3ba;
  border-radius: 0 20px 20px 0;
  margin: 10px 0;
  color: #fff;
  box-shadow: 0px 2px 4px -1px #00000033, 0px 4px 5px 0px #00000024,
    0px 1px 10px 0px #0000001f;
  transition: 3s;
  opacity: ${({ opacity }) => opacity || 0};
`;
//

export const GridWrapper = styled.div`
  margin: 10px;
  padding: 10px;
  align-self: auto;
  background: #2196f3;
  color: #fff;
  display: grid;
  grid-template-rows: 1fr;
  transition: 2s;
  opacity: ${({ opacity }) => opacity || 0};
  max-width: 250px;
  h1 {
    margin-bottom: 0;
  }
  h2:first-of-type {
    margin: 0;
  }
  a:first-child {
    margin: auto;
  }
`;
//

export const LeftRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
`;
//

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
//

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 50px;
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
  background: ${({ colorBg }) => colorBg || "rgba(77, 144, 6, 0.5)"};
  text-align: center;
  :hover {
    background: #00000014;
    transform: scale(1.05);
  }
  :active {
    background: #ffffff2b;
    transform: scale(0.9);
  }
`;
//

export const Price = styled.h2`
  color: rgb(175, 216, 25);
  background: #00000030;
  padding: 10px 20px;
  min-width: 100px;
  text-align: center;
`;
//

export const ProductImage = styled.div`
  position: relative;
  margin: ${({ margin }) => margin || "0px 30px"};
  img {
    max-width: ${({ width }) => width || "100%"};
    min-width: 100px;
  }
  div {
    position: absolute;
    right: -10px;
    bottom: 15px;
    color: #fff;
    background: #c10404;
    font-size: 25px;
    padding: 5px 10px;
    padding-right: 35px;
    border-radius: 5px 0 0 5px;
    text-align: left;
  }
`;
