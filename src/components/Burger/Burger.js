import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

const Burger = (props) => {
  return (
    <div className={classes.Burger}>
        <BurgerIngredients type="bread-top" />
        <BurgerIngredients type="bacon" />
        <BurgerIngredients type="cheese" />
        <BurgerIngredients type="meat" />
        <BurgerIngredients type= "salad" />
        <BurgerIngredients type="cheese" />
        <BurgerIngredients type="meat" />
        <BurgerIngredients type="cheese" />
        <BurgerIngredients type="meat" />
        <BurgerIngredients type= "salad" />
        <BurgerIngredients type="cheese" />
        <BurgerIngredients type="meat" />
        <BurgerIngredients type="cheese" />
        <BurgerIngredients type="meat" />
        <BurgerIngredients type= "salad" />
        <BurgerIngredients type="cheese" />
        <BurgerIngredients type="meat" />
        <BurgerIngredients type="bread-bottom" />
    </div>
  );
}

export default Burger;