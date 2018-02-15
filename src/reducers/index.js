// Set up your root reducer here...
import { combineReducers } from 'redux';
import {booksReducer} from './bookReducers'

export default combineReducers({
  books: booksReducer
});
