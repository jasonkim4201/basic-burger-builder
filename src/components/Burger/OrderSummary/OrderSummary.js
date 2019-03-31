import React from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(ingredientKey => {
    /* console.log(`ingredient key: ${ingredientKey}`); */
    return (
      <li key={ingredientKey}>
        <span style={{ textTransform: "capitalize" }}>{ingredientKey}</span>: {props.ingredients[ingredientKey]}
      </li>
    )
  })


  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>Contains the following toppings:</p>
      <ul>
        {/* create list items dynamically */}
        {ingredientSummary}
      </ul>
      <p><strong>Total: ${props.total.toFixed(2)}</strong></p> {/* remember to add toFixed to keep it at 2 decimals */}
      <p>Proceed to checkout?</p>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
    </Auxiliary>
  )
}

export default OrderSummary;