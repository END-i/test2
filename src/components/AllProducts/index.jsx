import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import GridView from "./GridView";
import ListView from "./ListView";

import { Wrapper } from "./styled";

import { addToCart } from "../../store/cart/actions";
//
//
//

const AllProducts = ({ products, viewProducts, user, addToCart }) => {
  if (!products) return null;
  const [count, setCount] = useState(0);
  const [productUnit, setProductUnit] = useState(products.slice(0, count));
  const contentRef = useRef();

  useEffect(() => {
    add();
  });

  const add = () => {
    if (
      contentRef.current.getBoundingClientRect().bottom < window.innerHeight
    ) {
      setCount(count + 1);
      setProductUnit(products.slice(0, count + 1));
    }

    window.onscroll = async () => {
      if (
        contentRef.current.getBoundingClientRect().bottom - 300 <
        window.innerHeight
      ) {
        await setCount(count + 1);
        await setProductUnit(products.slice(0, count + 1));
      }
    };
  };
  return (
    <Wrapper>
      {viewProducts ? (
        <ListView
          unit={productUnit}
          user={user}
          addToCart={addToCart}
          contentRef={contentRef}
        />
      ) : (
        <GridView unit={productUnit} user={user} addToCart={addToCart} contentRef={contentRef}/>
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
