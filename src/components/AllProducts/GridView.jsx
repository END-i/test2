import React from "react";
import { Link } from "react-router-dom";

import { Grid, GridWrapper, MyImage, Price, MyButton } from "./styled";

const GridLayout = ({ unit }) => {
  return (
    <Grid>
      {unit.map(unit => (
        <GridWrapper>
          <Link to={`/product_id/:${unit.id}`}>
            <MyImage src={unit.image} alt="image product" padding={"0"} />
          </Link>
          <h1>{unit.product_name}</h1>
          <h2>{unit.modal}</h2>
          <Price>{unit.price}</Price>
          <Link to={`/product_id/:${unit.id}`}>
            <MyButton>More</MyButton>
          </Link>
        </GridWrapper>
      ))}
    </Grid>
  );
};

export default GridLayout;
