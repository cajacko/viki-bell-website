/* @flow */

import React from 'react';
import { StaticRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Entry from 'views/entry';

const Server = ({ url, context }: { url: String, context: {} }) => (
  <StaticRouter
    location={url}
    context={context}
  >
    <Entry />
  </StaticRouter>
);

Server.propTypes = {
  url: PropTypes.string,
};

Server.defaultProps = {
  url: '',
};

export default Server;
