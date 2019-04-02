import React, {Component} from "react";
import CheckoutSummary from "../../components/Orders/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0
  }

  componentWillMount = () => {
      const query = new URLSearchParams(this.props.location.search);
      const ingredients = {};
      let price = 0;
      for (let param of query.entries()) {
        // each entry will be like ["bacon", "1"]
        // set it into an object format left side represents keys right side is value
        if (param[0] === "price") {
          price = param[1];
        } else {
          ingredients[param[0]] = +param[1];
        }
        
      } 
      this.setState({ingredients: ingredients, totalPrice: price});
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  }

  checkoutCancelledHandler = () => {
    // react router has a a function for us to go back to the last page
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <CheckoutSummary
            ingredients={this.state.ingredients}
            checkoutContinued={this.checkoutContinuedHandler}
            checkoutCancelled={this.checkoutCancelledHandler}
        
        />
        <Route 
          exact path={`${this.props.match.path}/contact-data`} 
          render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props}/>)}
        /> 
      </div>
    )
  }
}

export default Checkout;