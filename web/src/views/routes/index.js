/* @flow */

import React from 'react';
import { Route } from 'react-router-dom';
import App from 'components/App/App';
import Post from 'components/Post/Post';

const Router = () => (
  <div>
    <Route exact path="/" component={App} />
    <Route path="/post/:id" component={Post} />
  </div>
);

export default Router;
