import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import GridView from "./GridView";
import ListView from "./ListView";

import { Wrapper } from "./styled";

import { addToCart } from "../../store/cart/actions";
//

const AllProducts = props => {
  const { products, viewProducts, user, addToCart } = props;

  if (!products) return null;
  const [productUnit, setProductUnit] = useState(products.slice(0, 0));
  const contentRef = useRef();

  useEffect(() => {
    add();
    window.onscroll = () => {
      add();
    };
  });

  const add = () => {
    if (contentRef.current) {
      let coor = contentRef.current.getBoundingClientRect().bottom;
      let wind = window.innerHeight;

      setTimeout(() => {
        if (coor < wind && productUnit.length < products.length) {
          let num = productUnit.length + 1;
          setProductUnit(products.slice(0, num));
        }
      }, 100);
    }
  };

  return (
    <Wrapper>
      {viewProducts ? (
        <ListView
          unit={productUnit}
          user={user}
          addToCart={addToCart}
          contentRef={contentRef}
          add={add}
        />
      ) : (
        <GridView
          unit={productUnit}
          user={user}
          addToCart={addToCart}
          contentRef={contentRef}
          add={add}
        />
      )}
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  viewProducts: state.viewProducts,
  products: state.products,
  user: state.authorizationStatus
});

const mapDispatchToProps = dispatch => ({
  addToCart: (purchase, user) => dispatch(addToCart(purchase, user))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AllProducts)
);
