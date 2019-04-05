import * as actionTypes from "../actions/actionTypes";

// make initialState
const initialState = {
  orders: [],
  isLoading: false, 
};

// make a reducer and remember they take in state(= to initial state) and action as inputs
const reducer = (state = initialState, action) => {
  // add switch case
  switch (action.type) {
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
        orders: state.orders.concat(newOrder)
      };
  
    case actionTypes.PURCHASE_BURGER_FAILED:
    
      return {
        ...state,
        isLoading: false //turn off loading even if it all fails
      };

    default:
      return state;
  }
};

export default reducer;