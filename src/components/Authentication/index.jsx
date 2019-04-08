import React, { useEffect } from "react";
import { auth } from "../../firebase";

const Authentication = () => {
  const Auth = ComposedComponent => {
    useEffect(() => {
      auth.onAuthStateChanged(user => {
        console.log(user);
      });
    });

    if (this.props.authenticated) {
      return <ComposedComponent {...this.props} />;
    }
    return null;
  };
  return Auth;
};

export default Authentication;
