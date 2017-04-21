/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Entry from 'views/entry';

ReactDOM.render(
  <BrowserRouter>
    <Entry />
  </BrowserRouter>,
  document.getElementById('app'),
);
