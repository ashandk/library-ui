import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './components/common/LibraryPage';
import BookPage from './components/book/BookPage';
import App from './components/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}> </IndexRoute>
    <Route path="/books" component={BookPage}> </Route>
  </Route>
);
