import * as actionTypes from "./actionTypes";

// export my action creators that use my action types

export const addIngredient = (name) => {
  return {
    // remember in the burgerBuilder container the payload was named ingredientName so make sure the object key named respectively
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  };
}

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  }
}