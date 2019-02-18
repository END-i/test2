import React from "react";
import MyButton from "../styled/MyButton";
import SaleTag from "../styled/SaleTag";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../../../../actions/actionAddToCart";

class ListLayout extends React.Component {
  addCarToCart = car => () => {
    const { addToCart, cartData } = this.props;
    let result = [car, ...cartData];
    addToCart(result);
  };

  render() {
    return (
      <div>
        {this.props.data.map((item, key) => {
          const i = !(key % 2) ? "#e0e0e0" : "#efefef";
          return (
            <div
              key={item.id}
              style={{
                background: `linear-gradient(${i} ,#efefef,  ${i})`,
                display: "grid",
                borderRadius: "5px",
                gridTemplateColumns: "1fr auto",
                padding: "10px 30px",
                margin: "5px"
              }}
            >
              <div
                style={{
                  display: "grid",

                  gridTemplateColumns: "0fr 1fr"
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
                <ul>
                  <li>
                    <h2>{item.product_name}</h2>
                  </li>
                  <li>
                    <small>Product ID: {item.product_id}</small>
                  </li>
                </ul>
              </div>
              <div>
                <h3 style={{ textAlign: "right", margin: "10px 5px" }}>
                  {item.price}
                </h3>
                <div>
                  <Link to={`/product/${key}`}>
                    <MyButton color1="#989898" color2="#000000">
                      <b>MORE</b>
                    </MyButton>
                  </Link>
                  <MyButton
                    color1="#eccf7c"
                    color2="#cca332"
                    onClick={this.addCarToCart(item)}
                  >
                    <b>ADD TO CART</b>
                  </MyButton>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartData: state.cartData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: car => dispatch(addToCart(car))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListLayout)
);
