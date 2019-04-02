import React, {Component} from "react";
import CheckoutSummary from "../../components/Orders/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    // temp dummy data
    ingredients: {
      lettuce: 1,
      cheese: 1,
      bacon: 1,
      meat: 3
    }
  }

  componentDidMount = () => {
      const query = new URLSearchParams(this.props.location.search);
      const ingredients = {};
      for (let param of query.entries()) {
        // each entry will be like ["bacon", "1"]
        // set it into an object format left side represents keys right side is value
        ingredients[param[0]] = +param[1];
      }
      this.setState({ingredients: ingredients});
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
        <Route exact path={`${this.props.match.path}/contact-data`} component={ContactData}/> {/* exact path will it cause issues? */}
      </div>
    )
  }
}

export default Checkout;