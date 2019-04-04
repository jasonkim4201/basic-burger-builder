import React, {Component} from "react";
import CheckoutSummary from "../../components/Orders/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import { connect } from "react-redux";

class Checkout extends Component {
  
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
            ingredients={this.props.ings}
            checkoutContinued={this.checkoutContinuedHandler}
            checkoutCancelled={this.checkoutCancelledHandler}
        
        />
        <Route 
          exact path={`${this.props.match.path}/contact-data`} 
          component={ContactData}
        /> 
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { //make sure this matches the initialState from reducer!
    ings: state.ingredients
  }
}

export default connect(mapStateToProps)(Checkout);