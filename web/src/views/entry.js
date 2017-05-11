/* @flow */

import React from 'react';
import { Provider } from 'react-redux';
import { StyleRoot } from 'radium';
import configureStore from 'store/configureStore';
import Router from 'routes/index';

const store = configureStore();

export default () => (
  <StyleRoot>
    <Provider store={store}>
      <Router />
    </Provider>
  </StyleRoot>
);
