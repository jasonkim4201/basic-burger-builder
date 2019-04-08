import React, {Component} from "react";
import { connect } from "react-redux";
import Order from "../../components/Orders/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/";
import Spinner from "../../components/UI/Spinner/Spinner";
import CustomError from "../../components/CustomError/CustomError";


class Orders extends Component {
  // get token from redux auth reducer file. aka pull it from mapStateToProps
  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId);
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
        {this.props.error ? <CustomError message="Looks like we're experiencing some issues. Come back later!"/> : orders}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders, 
    isLoading: state.order.isLoading, 
    error: state.order.error,
    token: state.auth.token,
    userId: state.auth.userId
  } //redux dev tools is so useful here
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId)),
  };
}

// remember to connect mapStateToProps... thats why its screaming at me that its not a function AND IMPORT CONNECT!
// wrap export default with an error handler! also reminder to pass in axios as an arguement!
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
// hey remember its connect(matchStateToProps, matchDispatchToProps)....