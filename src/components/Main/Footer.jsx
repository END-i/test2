import React, { Component } from "react";

class Footer extends Component {
  state = {};

  render() {
    const style = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "40px",
      borderTop: "2px solid #fff",
      margin: "0 20px",
      color: "#9e9e9e"
    };
    return (
      <div style={style}>
        END-i Corporation, Tokmak &copy; {new Date().getFullYear()}
      </div>
    );
  }
}

export default Footer;
