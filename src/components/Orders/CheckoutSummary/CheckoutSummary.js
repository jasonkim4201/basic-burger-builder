import React from "react";
import classes from "./CheckoutSummary.module.css";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const CheckoutSummary = (props) => {
    const style = {
      width : "100%", 
      margin: "auto",
      display: "flex",
    }

    return (
      <div className={classes.CheckoutSummary}>
        <h1>Confirm your delicious burger!</h1>
        <div style={style}>
          <Burger ingredients={props.ingredients}/>
        </div> 
        <Button
            btnType="Success"
            clicked={props.checkoutContinued}
            >CONTINUE</Button>
        <Button
            btnType="Danger"
            clicked={props.checkoutCancelled}>CANCEL</Button>
      </div>
    );
};

export default CheckoutSummary;