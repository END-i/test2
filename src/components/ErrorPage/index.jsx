import React from "react";

import { Wrapper, Background } from "./styled";
//

const ErrorPage = () => {
  return (
    <Background>
      <Wrapper>
        <img src={require("./assets/error.png")} alt="" />
        <br />
        Something went wrong!
        <br />
        Come later
      </Wrapper>
    </Background>
  );
};
export default ErrorPage;
