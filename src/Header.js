import React, { Component } from "react";

import "./App.css";
import headStyles from "./head.module.css";
// import logo from "../assets/ell.png";

const Header = props => {
  return (
    <div className={headStyles.headerContainer}>
      <div className={headStyles.headerContainer2}>
        {/* <img src={logo} alt="greet" width="30px" height="50px" /> */}
      </div>
      <h1 style={{fontFamily:"cursive"}}>{props.title || "ELLES PLACE"}</h1>
    </div>
  );
};

export default Header;
