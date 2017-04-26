/* @flow */

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';
import Router from 'routes/index';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <Router />
  </Provider>
);
