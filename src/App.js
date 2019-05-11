import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import asyncComponent from "./hoc/asyncComponent/asyncComponent";
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import CustomError from './components/CustomError/CustomError';
import Logout from './containers/Authenticate/Logout/Logout';
import * as actions from "./store/actions/";

// lazy loaders
const asyncCheckout = asyncComponent(() =>  {
  return import("./containers/Checkout/Checkout.js");
});

const asyncOrders = asyncComponent(() =>  {
  return import("./containers/Orders/Orders");
});

const asyncAuth = asyncComponent(() =>  {
  return import("./containers/Authenticate/Auth.js");
});

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/sign-in" component={asyncAuth} />
        <Route exact path="/" component={BurgerBuilder} />
        <Route render={() => <CustomError message="Page not found!" />} />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
            <Route path="/checkout" component={asyncCheckout} /> {/* make sure to match path from navigation items */}
            <Route path="/orders" component={asyncOrders} />
            <Route path="/sign-in" component={asyncAuth} />
            <Route path="/logout" component={Logout} />
            <Route exact path="/" component={BurgerBuilder} />
            <Redirect to="/" />
            <Route render={() => <CustomError message="Page not found!" />} />
          </Switch>
      );
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

/* 
          <Switch>
            <Route path="/checkout" component={Checkout} /> 
            <Route path="/orders" component={Orders} />
            <Route path="/sign-in" component={Auth} />
            <Route path="/logout" component={Logout} />
            <Route exact path="/" component={BurgerBuilder} />
            <Route render={() => <CustomError message="Page not found!" />} />
          </Switch>
          TODO: ADDRESS BUG WHERE REFRESHING AT ORDERS KICKS 401 ERROR FROM THIS
          UNCOMMENTED CODE IS MORE SECURE HOWEVER SO MAY NOT BE WORTH PERSUING OVER A SILLY ERROR PIC I IMPLEMENTED
*/
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));