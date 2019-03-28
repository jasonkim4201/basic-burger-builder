import React from "react";
import classes from "./BurgerIngredients.module.css";

const BurgerIngredients = (props) => {
  let ingredient = null;

  switch (props.type) {
    case ("bread-bottom"):
      ingredient = <div className={classes.BreadBottom}></div>;
      break;

    case ("bread-top"):
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;

    case ("meat"):
      ingredient = <div className={classes.Meat}></div>;
      break;

    // make cases for Cheese, Salad, and Bacon

    case ("cheese"):
      ingredient = <div className={classes.Cheese}></div>;
      break;

    case ("salad"):
      ingredient = <div className={classes.Salad}></div>;
      break;

    case ("bacon"):
      ingredient = <div className={classes.Bacon}></div>
      break;

    default:
        ingredient = null;
    break;
  }

};

export default BurgerIngredients;