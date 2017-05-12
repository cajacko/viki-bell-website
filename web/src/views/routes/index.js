/* @flow */

import React from 'react';
import { Route } from 'react-router-dom';
import App from 'containers/App';
// import Post from 'components/Post/Post';

const Router = () => (
  <div>
    <Route exact path="/" component={App} />
  </div>
);

export default Router;
