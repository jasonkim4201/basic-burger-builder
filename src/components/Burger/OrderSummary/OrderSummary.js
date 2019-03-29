import React from "react";
import Auxiliary from "../../../hoc/Auxiliary";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(ingredientKey => {
    console.log(`ingredient key: ${ingredientKey}`);
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
      <p>Proceed to checkout?</p>
    </Auxiliary>
  )
}

export default OrderSummary;