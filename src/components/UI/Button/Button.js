import React from "react";
import classes from "./Button.module.css";

const Button = (props) => (
    <button
      disabled={props.disabled}
      className={[classes.Button, classes[props.btnType]].join(" ")} /* remember to set btnType prop to Sucess or Danger */
      onClick={props.clicked}>{props.children}</button>
);

export default Button;