import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

const Burger = (props) => {
    // Object.keys() extracts keys of a given objectand turns it into an array. so array of keys
    // so bacon, cheese and meat will come out as a string which will help make this all dynamically
    let transformedIngredients = Object.keys(props.ingredients).map(ingredientKey => {     
          // spread a new array with array method
          //ie [...Array(3)] would give me an array of 3 empty spaces with 3 undefined spaces. makes sense right?!?
          return [...Array(props.ingredients[ingredientKey])].map((unusedElement, i) => {
                                //key would look like bacon2 or whatever...
              return <BurgerIngredients key={ingredientKey + i} type={ingredientKey} />;
          });
        })
        .reduce((array, element) => {
          return array.concat(element)
        }, []);
      if (transformedIngredients.length === 0) {
          transformedIngredients = <p>Start building that delicious burger!</p>;
      }
      /* console.log(transformedIngredients);   */
return (
    <div className={classes.Burger}>
        <BurgerIngredients type="bread-top" />
        {transformedIngredients}
        <BurgerIngredients type="bread-bottom" />
    </div>
  );
}

export default Burger;