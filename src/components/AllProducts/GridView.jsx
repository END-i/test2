import React from "react";
import { Link } from "react-router-dom";

import { Grid, GridWrapper, Price, MyButton, ProductImage } from "./styled";

const GridLayout = ({ unit, user, addToCart }) => {
  return (
    <Grid>
      {unit.map(unit => (
        <GridWrapper key={unit.id}>
          <Link to={`/product_id/:${unit.id}`}>
            <ProductImage margin="0">
              {unit.sale && <div>SALE</div>}
              <img src={unit.image} alt="" />
            </ProductImage>
          </Link>
          <h1>{unit.product_name}</h1>
          <h2>{unit.modal}</h2>
          <Price>{unit.price}</Price>
          {user && (
            <MyButton onClick={() => addToCart(unit,user)}>Add to Cart</MyButton>
          )}
          <Link to={`/product_id/:${unit.id}`}>
            <MyButton colorBg='#0b1bad78'>More</MyButton>
          </Link>
        </GridWrapper>
      ))}
    </Grid>
  );
};

export default GridLayout;
