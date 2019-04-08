import React from "react";

import { Wrapper, Background } from "./styled";

const Eror = () => {
  return (
    <Background>
      <Wrapper>
        <img src={require("./media/Kartinki_1117_03095305.png")} alt="" />
        <br/>
        Something went wrong!
        <br/>
        Come later
      </Wrapper>
    </Background>
  );
};

export default Eror;
