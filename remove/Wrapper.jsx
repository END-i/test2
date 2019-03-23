import React, { Fragment } from "react";
import Footer from "./Footer/Footer";
import Content from "./Content";
import Header from "./Header";

const Wrapper = () => (
  <Fragment>
    <Header />
    <Content />
    <Footer />
  </Fragment>
);

export default Wrapper;
