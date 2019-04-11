import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

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
  transition: 0.3s;
  :hover {
    margin: 10px 5px 0;
  }
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
  margin: 5px 0;
  font-size: 1.3rem;
  font-weight: 700;
  transition: 250ms;
  border-radius: 4px;
  text-transform: uppercase;
  user-select: none;
  cursor: pointer;
  color: #fff;
  background: rgba(144, 79, 6, 0.5);
  text-align: center;
  :active {
  }
  :hover {
    background: #00000014;
    transform: scale(1.05);
  }
  :active {
    background: #ffffff2b;
    transform: scale(0.9);
  }
`;

export const Price = styled.h2`
  color: rgb(175, 216, 25);
  background: #00000030;
  padding: 10px 20px;
  margin: 5px;
  min-width: 100px;
  text-align: center;
`;

export const ProductImage = styled.div`
  position: relative;
  margin: ${({ margin }) => margin || "0px 30px"};
  img {
    max-width: 150px;
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

export const ButtonControl = styled(MyButton)`
  background: ${({ colorBg }) => colorBg || "rgba(144, 79, 6, 0.5)"};
  :hover,
  :active {
    transform: none;
  }
`;

export const EmptyWrapper = styled.div`
  text-align: center;
  font-size: 50px;
  margin: auto;
  color: #fff;
  font-weight: 800;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;
