import React from "react";
import classes from "./CustomError.module.css";
import sadBurger from "../../assets/images/kissclipart-cartoon-clipart-cheeseburger-veggie-burger-junk-fo-58c1153b58284680.png"

const CustomError = (props) => (
  <div className={classes.CustomError}>
        <img src={sadBurger} alt="Burger error"/>
        <p>Oh no! Something went horribly wrong!</p>
        <p>{props.message}</p>
  </div>
);

export default CustomError;