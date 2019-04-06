import React, {Component} from "react";
import { connect } from "react-redux";
import Order from "../../components/Orders/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/";
import Spinner from "../../components/UI/Spinner/Spinner";


class Orders extends Component {
 
  componentDidMount() {
    this.props.onFetchOrders();
  }

  render() {
    // if error state is true dislpay custom error page else have the orders rendered
    let orders = <Spinner />;
    if (!this.props.isLoading) {   
      orders = this.props.orders.map(order => {
          //console.log(order);  
          return <Order 
                    key={order.id}
                    price={+order.price} //adding '+' before order.price to make toFixed() work
                    ingredients={order.ingredients}
                  />
        })
    }
    return (
      <div>
        {orders}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    orders: state.order.orders, //referring to order reducer
    isLoading: state.order.isLoading // i wrote isLoading in order.js.
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders())
  };
}

// remember to connect mapStateToProps... thats why its screaming at me that its not a function AND IMPORT CONNECT!
// wrap export default with an error handler! also reminder to pass in axios as an arguement!
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
// hey remember its connect(matchStateToProps, matchDispatchToProps)....