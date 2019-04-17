import React from "react";

import { Wrapper } from "./styled";
//

const Footer = () => (
  <Wrapper>
    <img src={require("./assets/end.png")} alt="" />
    <img
      src={require("./assets/winner-runner-arriving-to-end-line.png")}
      alt=""
    />
    <span>i</span>
    Corporation, Berdyansk &copy; {new Date().getFullYear()}
  </Wrapper>
);
export default Footer;
