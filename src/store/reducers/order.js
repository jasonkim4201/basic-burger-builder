import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

// make initialState
const initialState = {
  orders: [],
  isLoading: false,
  purchased: false,
  error: false
};

const purchaseInit = (state, action) => updateObject(state, { purchased: false });
const purchaseBurgerStart = (state, action) => updateObject(state, { isLoading: true });
const purchaseBurgerSuccess = (state, action) => {
  const newOrder = updateObject(action.OrderData, { id: action.id }); //these refer to the order.js in actions folder
      return updateObject(state, {
        isLoading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)
      });
};
const purchaseBurgerFailed = (state, action) => updateObject(state, { isLoading: false });
const fetchOrdersStart = (state, action) => updateObject(state, { isLoading: true });
const fetchOrdersSuccess = (state, action) => {
  return updateObject(state, {
    orders: action.orders, //see orders.js in in actions folder
    isLoading: false,
    error: false //errors
  });
};
const fetchOrdersFailed = (state, action) => {
  return updateObject(state, {
    isLoading: false,
    error: true
  });
}

// make a reducer and remember they take in state(= to initial state) and action as inputs
const reducer = (state = initialState, action) => {
  // add switch case
  switch (action.type) {
    case actionTypes.PURCAHSE_INIT: return purchaseInit(state, action);
    case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart(state, action);
    case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);
    case actionTypes.PURCHASE_BURGER_FAILED: return purchaseBurgerFailed(state, action);
    case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart(state,action);
    case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FAILED: return fetchOrdersFailed(state, action);
    default: return state;
  }
};

export default reducer;