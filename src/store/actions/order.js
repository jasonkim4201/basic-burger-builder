import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const purchaseBurgerSuccess = (id, orderData) => {
  return { // return a js object
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    id: id,
    orderData: orderData
  };
}

export const purchaseBurgerFailed = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAILED,
    error: error
  };
}

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START,

  }
};

export const purchaseBurger = (orderData) => {
  return dispatch => {

    dispatch(purchaseBurgerStart());
    
    axios.post("/orders.json", orderData)
      .then(response => {
        console.log(response.data)
        dispatch(purchaseBurgerSuccess(response.data.name, orderData))
      })
      .catch(error => {
        dispatch(purchaseBurgerFailed(error));
      });
  };

}

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCAHSE_INIT
  };
}

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
}

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
  };
}

export const fetchOrdersFailed = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAILED,
    error: error
  };
}

export const fetchOrders = () => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    axios.get("/orders.json")
        .then(response => {
          console.log(response);
          // use for in loop to turn the response.data object into an array
          const fetchedOrders = [];
          for (let key in response.data) {
              console.log(key); // unique id from firebase
              fetchedOrders.push({ //use spread operator to push new object into the array and add in firebase id in order info
                ...response.data[key],
                id: key
              });
          }
          dispatch(fetchOrdersSuccess(fetchedOrders))
        })
        .catch(error => {
          dispatch(fetchOrdersFailed(error));
        })    
  }
}