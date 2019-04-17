import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Grid, GridWrapper, Price, MyButton, ProductImage } from "./styled";

const Layout = ({ unit, user, addToCart }) => {
  const [isOpacity, setIsOpacity] = useState(0);

  useEffect(() => {
    setIsOpacity(1);
  });

  return (
    <GridWrapper opacity={isOpacity}>
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
        <MyButton onClick={() => addToCart(unit, user)}>Add to Cart</MyButton>
      )}
      <Link to={`/product_id/:${unit.id}`}>
        <MyButton colorBg="#0b1bad78">More</MyButton>
      </Link>
    </GridWrapper>
  );
};

const GridLayout = ({ unit, user, addToCart, contentRef }) => {
  return (
    <Grid ref={contentRef}>
      {unit.map(unit => (
        <Layout key={unit.id} unit={unit} user={user} addToCart={addToCart} />
      ))}
    </Grid>
  );
};

export default GridLayout;
