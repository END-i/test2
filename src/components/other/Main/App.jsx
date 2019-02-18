import React, { Component, Fragment } from "react";
import Footer from "./Footer";
import Content from "./Content";
import Header from "./Header";

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default Main;
