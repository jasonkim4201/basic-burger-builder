import React, {Component} from "react";
import Order from "../../components/Orders/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  // state should have loading and orders
  state = {
    loading: true,
    orders: [],
    error: false
  }
  // fetch orders from firebase with componentDidMount and axios
  // get listed orders from orders.json
  componentDidMount() {
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
          this.setState({ loading: false, orders: fetchedOrders });
        })
        .catch(error => {
          this.setState({ loading: false, error: true });
        })    
  }

  render() {
    // if error state is true dislpay custom error page else have the orders rendered
    return (
      <div>
        {this.state.orders.map(order => {
          console.log(order);  
          return <Order 
                    key={order.id}
                    price={+order.price} //adding '+' before order.price to make toFixed() work
                    ingredients={order.ingredients}
                  />
        })}
      </div>
    );
  }
}
// wrap export default with an error handler! also reminder to pass in axios as an arguement!
export default withErrorHandler(Orders, axios);