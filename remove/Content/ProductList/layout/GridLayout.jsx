import React from "react";
import SaleTag from "../styled/SaleTag";
import { Link } from "react-router-dom";

const GridLayout = ({ data }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat( auto-fit, minmax(200px, 1fr) )"
      }}
    >
      {data.map((item, key) => (
        <div
          key={item.id}
          style={{
            background: `linear-gradient(#e0e0e0 ,#efefef, #e0e0e0 )`,
            border: "2px solid #e4e3e3",
            borderRadius: "5px",
            display: "grid",
            justifyItems: "center",
            gridTemplateColumns: "1fr",
            padding: "10px 30px",
            margin: "5px"
          }}
        >
          <div
            style={{
              display: "grid",
              justifyItems: "center",
              gridTemplateColumns: "1fr"
            }}
          >
            <div style={{ position: "relative" }}>
              {item.sale && <SaleTag>SALE</SaleTag>}
              <img
                src={item.image}
                alt="product_image"
                style={{
                  maxWidth: "200px",
                  maxHeight: "100px",
                  background: "#fff",
                  padding: "5px",
                  margin: "0 10px"
                }}
              />
            </div>
            <Link to={`/product/${key}`}>
              <h2 style={{ margin: "0" }}>{item.product_name}</h2>
            </Link>
          </div>
          <div>
            <h3 style={{ margin: "0", textAlign: "center" }}>{item.price}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridLayout;
