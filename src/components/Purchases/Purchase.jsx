import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import {
  ListWrapper,
  LeftRow,
  LeftColumn,
  RightColumn,
  MyButton,
  Price,
  ProductImage
} from "./styled";
//

const purchase = props => {
  const { cart, removeItem } = props;
  return (
    <Fragment>
      {cart.map((unit, key) => (
        <ListWrapper key={key}>
          <LeftRow>
            <ProductImage>
              <Link to={`/product_id/:${unit.id}`}>
                <img src={unit.image} alt="" />
              </Link>
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
};
export default purchase;
