import { Provider } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Routes from 'containers/Routes/Routes';
import ScrollToTop from 'containers/ScrollToTop/ScrollToTop';

// eslint-disable-next-line
const App = ({ Router, store, location, context }) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <ScrollToTop>
        <Route path="*" component={Routes} />
      </ScrollToTop>
    </Router>
  </Provider>
);

App.propTypes = {
  location: PropTypes.string,
  // eslint-disable-next-line
  context: PropTypes.object,
};

App.defaultProps = {
  location: undefined,
  context: undefined,
};

export default App;
