import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//Components
import Home from "./containers/Home";
//Others
import { store } from './store/configureStore'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  </Provider >,
  document.getElementById('root')
);