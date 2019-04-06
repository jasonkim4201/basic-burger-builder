import * as actionTypes from "../actions/actionTypes";

// make initialState
const initialState = {
  orders: [],
  isLoading: false,
  purchased: false,
  error: false
};

// make a reducer and remember they take in state(= to initial state) and action as inputs
const reducer = (state = initialState, action) => {
  // add switch case
  switch (action.type) {
    case actionTypes.PURCAHSE_INIT:
      return {
        ...state,
        purchased: false
      };

    case actionTypes.PURCHASE_BURGER_START:
      return { //copy state to get old orders and then proceed with the loading
        ...state,
        isLoading: true
      };

    case actionTypes.PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.OrderData,
        id: action.id //these refer to the order.js in actions folder
      }
      return {
        ...state,
        isLoading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)
      };

    case actionTypes.PURCHASE_BURGER_FAILED:
      return {
        ...state,
        isLoading: false //turn off loading even if it all fails
      };
    case actionTypes.FETCH_ORDERS_START:
      return {
        ...state,
        isLoading: true
      };

    case actionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.orders, //see orders.js in in actions folder
        isLoading: false,
        error: false //errors
      };

    case actionTypes.FETCH_ORDERS_FAILED: 
      return {
        ...state,
        isLoading: false,
        error: true
      };

    default:
      return state;
  }
};

export default reducer;