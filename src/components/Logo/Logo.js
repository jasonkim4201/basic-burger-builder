import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";

const Logo = (props) => (
  <div className={classes.Logo}
      style={{height: props.height, marginBottom: props.marginBottom}}> {/* use props to set an inline style to override */}
      <img src={burgerLogo} alt="logo"/>
  </div>
);

export default Logo;