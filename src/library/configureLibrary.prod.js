import {createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureLibrary(initialState) {
  const middewares = [
    // thunk middleware can also accept an extra argument to be passed to each thunk action
    thunkMiddleware,
  ];

  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middewares)
    )
  );
}
