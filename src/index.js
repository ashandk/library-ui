import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import * as bookActions from './actions/bookActions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import configureStore from './library/configureLibrary';

const store = configureStore();
store.dispatch(bookActions.getAuthanticated());
setTimeout(function() {store.dispatch(bookActions.fetchBooks())}.bind(this), 1000);
render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
);
