import React from "react";
import classes from "./Order.module.css"

// use the props and insert in the order information 
const Order = (props) => {
  // can also used the transformed ingredients from burgers.js
  // console.log(`props ingred`);
  // console.log(props.ingredients);

  const ingredients = [];
  
  for (let ingredientName in props.ingredients) {
    //console.log(ingredientName);
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName] // <--- values of the ingredients
    }); 
  }

  // console.log('INGREDIENTS')
  // console.log(ingredients);
  const style = {
    textTransform: "capitalize",
    display: "inline-block",
    margin: "0 8px",
    border: "1px solid #ccc",
    padding: "5px",
    fontWeight: "bold"
  }

  const ingredientOutput = ingredients.map(ingredient => {
    // console.log(ingredient);
    return <span
      style={style}
      key={ingredient.name}>{ingredient.name} ({ingredient.amount})</span>
  })

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: <strong>${props.price.toFixed(2)}</strong></p> {/* adding toFixed(2) just in case */}
      {/* can also use Number.parseFloat(props.price.toFixed(2)) */}
    </div>
  );
};

export default Order;