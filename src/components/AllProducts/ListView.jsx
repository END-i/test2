import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  List,
  ListWrapper,
  LeftRow,
  LeftColumn,
  RightColumn,
  MyButton,
  Price,
  ProductImage
} from "./styled";

const Layout = ({ unit, user, addToCart }) => {
  const [isOpacity, setIsOpacity] = useState(0);

  useEffect(() => {
    setIsOpacity(1);
  });

  return (
    <ListWrapper opacity={isOpacity}>
      <LeftRow>
        <Link to={`/product_id/:${unit.id}`}>
          <ProductImage width="250px">
            {unit.sale && <div>SALE</div>}
            <img src={unit.image} alt="" />
          </ProductImage>
        </Link>
        <LeftColumn>
          <h1>{unit.product_name}</h1>
          <h2>{unit.modal}</h2>
        </LeftColumn>
      </LeftRow>
      <RightColumn>
        <Price>{unit.price}</Price>
        {user && (
          <MyButton onClick={() => addToCart(unit, user)}>Add to Cart</MyButton>
        )}
        <Link to={`/product_id/:${unit.id}`}>
          <MyButton colorBg="#0b1bad78">More</MyButton>
        </Link>
      </RightColumn>
    </ListWrapper>
  );
};

const ListLayout = ({ unit, user, addToCart, contentRef }) => {
  return (
    <List ref={contentRef}>
      {unit.map(unit => (
        <Layout key={unit.id} unit={unit} user={user} addToCart={addToCart} />
      ))}
    </List>
  );
};

export default ListLayout;
