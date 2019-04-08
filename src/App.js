import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom"; 
import { connect } from "react-redux";
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import CustomError from './components/CustomError/CustomError';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Authenticate/Auth';
import Logout from './containers/Authenticate/Logout/Logout';
import * as actions from "./store/actions/";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div>
       <Layout>
         <Switch>
          <Route path="/checkout" component={Checkout} /> {/* make sure to match path from navigation items */}
          <Route path="/orders" component={Orders} />
          <Route path="/sign-in" component={Auth} />
          <Route path="/logout" component={Logout} />
          <Route exact path="/" component={BurgerBuilder}/>
          <Route render ={() => <CustomError message="Page not found!" />} />
         </Switch>
       </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));