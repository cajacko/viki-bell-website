import React from 'react';
import PropTypes from 'prop-types';
import { StaticRouter as Router } from 'react-router-dom';
import configureStore from 'store/configureStore';
import App from 'containers/App/App';

const Server = ({ location, context, state }) => {
  const store = configureStore(state);

  return (
    <App Router={Router} store={store} location={location} context={context} />
  );
};

Server.propTypes = {
  location: PropTypes.string.isRequired,
  // eslint-disable-next-line
  context: PropTypes.object.isRequired,
  // eslint-disable-next-line
  state: PropTypes.object.isRequired,
};

export default Server;
