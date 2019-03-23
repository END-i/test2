import React from "react";
import { GetDataConsumer } from "./ProductData";

const takeData = Wrapper => {
  return (
    <GetDataConsumer>
      {data => {
        return <Wrapper data={data} />;
      }}
    </GetDataConsumer>
  );
};

export default takeData;
