import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux";
import { createStore } from "redux";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from "./store/reducer";

// create store constant to createStore which will take in the reducer
const store = createStore(reducer);

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
