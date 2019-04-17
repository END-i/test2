import React from "react";

import { Wrapper, Image } from "./styled";
//

const Loading = ({ loading }) => {
  return (
    <Wrapper>
      <Image src={require("./assets/477.gif")} alt="spinner" />
    </Wrapper>
  );
};
export default Loading;
