import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from "react-router-dom"; 
import CustomError from './components/CustomError/CustomError';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Authenticate/Auth';


class App extends Component {
  render() {
    return (
      <div>
       <Layout>
         <Switch>
          <Route path="/checkout" component={Checkout} /> {/* make sure to match path from navigation items */}
          <Route path="/orders" component={Orders} />
          <Route path="/sign-in" component={Auth} />
          <Route exact path="/" component={BurgerBuilder}/>
          <Route render ={() => <CustomError message="Page not found!" />} />
         </Switch>
       </Layout>
      </div>
    );
  }
}

export default App;
