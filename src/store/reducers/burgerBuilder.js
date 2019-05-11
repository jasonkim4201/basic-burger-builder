import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

// set initial state constant to define state

const initialState = {
  ingredients: null,
  totalPrice: 5,
  error: false,
  isBuilding: false
};

const INGREDIENT_PRICES = {
  lettuce: 0.25,
  bacon: 0.75, /* fancy bacon okay */
  cheese: 0.5,
  meat: 1.25
};

const addIngredient = (state, action) => {// .ingredientName comes form matchDispatchToProps
  const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    isBuilding: true 
  }
  return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
  const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
  const updatedIngs = updateObject(state.ingredients, updatedIng);
  const updatedStateRemove = {
    ingredients: updatedIngs,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    isBuilding: true
  };
  return updateObject(state, updatedStateRemove);
};

const setIngredients = (state, action) => {
  return updateObject(state, {
    // ingredients: action.ingredients, // see burgerbuilder.js in actions folder for refrence to the property
    ingredients: {
      bacon: action.ingredients.bacon,
      lettuce: action.ingredients.lettuce,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat, //this reduces flexibility but will get the lettuce to go on an area i want
    },
    error: false,
    totalPrice: 5,
    isBuilding: false
  });
}

const fetchIngredientsFailed = (state, action) => {
  return updateObject(state, { error: true });
}

// create reducer function that takes in state and action as args
const reducer = (state = initialState, action) => {
  switch (action.type) { //always have a type property on action~
    case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
    case actionTypes.FETCH_FAILED_INGREDIENTS: return fetchIngredientsFailed(state, action);
    default: return state; // okay react you can finally stop nagging me over not having a default in my switch case.
      
  }
};

export default reducer;