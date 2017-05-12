import React from 'react';
import { Route } from 'react-router-dom';
import App from 'components/App/App';

const Router = () => (
  <div>
    <Route exact path="/" component={App} />
  </div>
);

export default Router;
