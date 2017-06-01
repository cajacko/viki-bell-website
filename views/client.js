/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { StyleRoot } from 'radium';
import configureStore from 'store/configureStore';
import Router from 'views/routes/index';

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <StyleRoot>
      <Provider store={store}>
        <Router />
      </Provider>
    </StyleRoot>
  </BrowserRouter>,
  document.getElementById('app'),
);
