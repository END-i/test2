import React, { Fragment } from "react";

import {
  ListWrapper,
  LeftRow,
  LeftColumn,
  RightColumn,
  MyButton,
  Price,
  ProductImage,
} from "./styled";
//
//
//

const purchase = ({ cart, removeItem }) => (
  <Fragment>
    {cart.map((unit, key) => (
      <ListWrapper key={key}>
        <LeftRow>
          <ProductImage>
            <img src={unit.image} alt="" />
          </ProductImage>
          <LeftColumn>
            <h1>{unit.product_name}</h1>
            <h2>{unit.modal}</h2>
          </LeftColumn>
        </LeftRow>
        <RightColumn>
          <Price>{unit.price}</Price>
          <MyButton onClick={removeItem(key)}>Remove</MyButton>
        </RightColumn>
      </ListWrapper>
    ))}
  </Fragment>
);

export default purchase;
