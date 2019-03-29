import React, { Component } from "react";
import classes from "./BurgerIngredients.module.css";
import { PropTypes } from "prop-types"; //to validate the kinds of props I will be throwing into this app

class BurgerIngredients extends Component {

  render() {

    let ingredient = null;

    switch (this.props.type) {
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

    return ingredient;

  }
}

BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredients;