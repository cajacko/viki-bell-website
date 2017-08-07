import { Provider } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import HomeView from 'components/HomeView/HomeView';
import ScrollToTop from 'containers/ScrollToTop/ScrollToTop';
import removeLoading from 'helpers/removeLoading';

removeLoading();

// eslint-disable-next-line
const App = ({ Router, store, location, context }) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <ScrollToTop>
        <Route path="/" component={HomeView} />
      </ScrollToTop>
    </Router>
  </Provider>
);

// <Route path="/posts" component={PostsView} />
// <Route path="/categories" component={CategoriesView} />
// <Route path="/posts/:slug" component={PostView} />
// <Route path="/categories/:slug" component={CategoryView} />
// <Route path="/sitemap" component={SitemapView} />
// <Route path="/:slug" component={PageView} />
// <Route path="*" component={FourOhFourView} />

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
