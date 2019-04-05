import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk"; //my middleware
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import burgerBuilderReducer from "./store/reducers/burgerBuilder";
import orderReducer from "./store/reducers/order";

// create store constant to createStore which will take in the reducer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// make a constant to COMBINE by reducers into some super reducer!!!

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer
});

// use the advanced store setup as shown on github
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

// provider should wrap around everything. yes, even the browser router. remember that...
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
