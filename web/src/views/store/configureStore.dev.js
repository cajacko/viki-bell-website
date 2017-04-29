/* @flow */

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import reducers from 'reducers/index';

let composeEnhancers = compose;

const reduxDevToolsName = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__';

if (typeof window !== 'undefined' && window[reduxDevToolsName]) {
  composeEnhancers = window[reduxDevToolsName];
}

export default function configureStore(preloadedState: {}) {
  return createStore(
    reducers,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware,
        logger,
      ),
    ),
  );
}
