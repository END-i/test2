import React, { Fragment } from "react";

import Routes from "./Routes";
import GlobalStyle from "./GlobalStyle";
//

export default function() {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes />
    </Fragment>
  );
}
