import React, { Fragment, useEffect, useState } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { Wrapper, Content } from "./styled";

import Products from "./Products";
import Details from "./Details";
import NotFound from "./NotFound";
import Loading from "../components/Loading";
import ErrorPage from "../components/ErrorPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "./Cart";
import ModalWindowAuth from "../components/ModalWindowAuth/";

import { getProducts } from "../store/products/actions";
import { signIn } from "../store/authorizationStatus/actions";

import { firestore, auth } from "../firebase";

import AnimationPage from "../components/AnimationPage";
//

const Routes = props => {
  const { signIn, getProducts, products } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!products) {
      datafromFirestore();
    }
    checkUser();
  });

  const datafromFirestore = async () => {
    const docRef = await firestore.collection("products").get();
    const data = await docRef.docs.map(item => {
      return { ...item.data() };
    });
    getProducts(data);
    animationLoading(data);
  };

  const animationLoading = data => {
    setTimeout(() => {
      data ? setIsLoading(false) : setIsError(true);
    }, 300);
  };

  const checkUser = () => {
    auth.onAuthStateChanged(user => {
      if (user) {
        signIn(user);
      }
    });
  };

  if (isLoading) return <Loading loading={isLoading} />;

  if (isError) return <ErrorPage error={isError} />;

  return (
    <Fragment>
      <Wrapper>
        <Header />
        <Content>
          <Switch>
            <Route exact path="/" component={Products} />
            <Route
              strict
              path="/product_id/:id"
              component={AnimationPage(Details)}
            />
            <Route exact path="/cart" component={AnimationPage(Cart)} />
            <Route exact path="/error" component={AnimationPage(ErrorPage)} />
            <Route
              exact
              strict
              path="/not_found"
              component={AnimationPage(NotFound)}
            />
            <Redirect from="*" to="/not_found" />>
          </Switch>
        </Content>
        <Footer />
      </Wrapper>
      <ModalWindowAuth />
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  getProducts: data => dispatch(getProducts(data)),
  signIn: user => dispatch(signIn(user))
});

const mapStateToProps = state => ({
  products: state.products
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Routes)
);
