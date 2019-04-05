import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";
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
  };
}
// fetch the ingredients asynchronously with an action creator
export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

// create action creator for errors
export const fetchFailedIngredients = () => {
  return {
    type: actionTypes.FETCH_FAILED_INGREDIENTS
  };
}

export const initIngredients = () => {
  return dispatch => {
    axios.get("https://basic-burger-builder.firebaseio.com/ingredients.json")
        .then(response => {
          dispatch(setIngredients(response.data));
        })
        .catch(error => {
          dispatch(fetchFailedIngredients());
        }); 
  };
}