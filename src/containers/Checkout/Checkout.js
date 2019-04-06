import React, { Component } from "react";
import CheckoutSummary from "../../components/Orders/CheckoutSummary/CheckoutSummary";
import { Route, Redirect } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import { connect } from "react-redux";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";


class Checkout extends Component {
  
  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  }

  checkoutCancelledHandler = () => {
    // react router has a a function for us to go back to the last page
    this.props.history.goBack();
  }

  render() {
    let summary = <Redirect to="/" />
    
    if (this.props.ings) {
      const purchasedRedirect = this.props.purchased && <Redirect to="/" />
      summary = (
        <Auxiliary> {/* div? */}
          {purchasedRedirect}
          <CheckoutSummary
            ingredients={this.props.ings}
            checkoutContinued={this.checkoutContinuedHandler}
            checkoutCancelled={this.checkoutCancelledHandler}

          />
          <Route
            exact path={`${this.props.match.path}/contact-data`}
            component={ContactData}
          />
        </Auxiliary>
      );
    }
    return summary;
  }
}

const mapStateToProps = state => {
  return { //make sure this matches the initialState from reducer!
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased
  };
}



export default connect(mapStateToProps)(Checkout);