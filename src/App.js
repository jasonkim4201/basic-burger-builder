import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from "react-router-dom"; 
import CustomError from './components/CustomError/CustomError';
import Orders from './containers/Orders/Orders';


class App extends Component {
  render() {
    return (
      <div>
       <Layout>
         <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} /> {/* cant believe i left out a '/'  here...*/}
          <Route exact path="/" component={BurgerBuilder}/>
          <Route render ={() => <CustomError message="Page not found!" />} />
         </Switch>
       </Layout>
      </div>
    );
  }
}

export default App;
