import * as actionTypes from "../actions/actionTypes";

// set initial state constant to define state

const initialState = {
  ingredients: null,
  totalPrice: 5,
  error: false 
};

const INGREDIENT_PRICES = {
  lettuce: 0.25,
  bacon: 0.75, /* fancy bacon okay */
  cheese: 0.5,
  meat: 1.25
};

// create reducer function that takes in state and action as args
const reducer = (state = initialState, action) => {
  switch (action.type) { //always have a typr property on action~
    case actionTypes.ADD_INGREDIENT: // .ingredientName comes form matchDispatchToProps
      return {
        // copy state with spread operator to prevent directly mutating state but then override ingredients with new stuff
        ...state,
        ingredients: { // remember this is nested stuff here so got to use spread operators again
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.SET_INGREDIENTS:
      return {
        ...state,
        // ingredients: action.ingredients, // see burgerbuilder.js in actions folder for refrence to the property
        ingredients: {
          bacon: action.ingredients.bacon,
          lettuce: action.ingredients.lettuce,
          cheese: action.ingredients.cheese,
          meat: action.ingredients.meat //this reduces flexibility but will get the lettuce to go on an area i want
        },
        error: false
      };
    
    case actionTypes.FETCH_FAILED_INGREDIENTS:
      return { //set error to true here
        ...state,
        error: true
      };

    default:
      return state; // okay react you can finally stop nagging me over not having a default in my switch case.
  }
};

export default reducer;