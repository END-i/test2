import React, { useState, useEffect } from "react";

import { Wrapper } from "./styled";
//

export default function(Page) {
  const WrapPage = () => {
    const [isOpacity, setIsOpacity] = useState(0);

    useEffect(() => {
      setIsOpacity(1);
    });

    return (
      <Wrapper opacity={isOpacity}>
        <Page />
      </Wrapper>
    );
  };

  return WrapPage;
}
