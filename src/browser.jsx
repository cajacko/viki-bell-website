import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'store/configureStore';
import App from 'containers/App/App';

let preloadedState = {};

if (typeof window !== 'undefined' && window.REDUX_PRELOADED_STATE) {
  preloadedState = window.REDUX_PRELOADED_STATE;
  delete window.REDUX_PRELOADED_STATE;
}

const store = configureStore(preloadedState);

ReactDOM.render(
  <App Router={Router} store={store} />,
  document.querySelector('#app'),
);
