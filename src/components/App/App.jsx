import { Provider } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import HomeView from 'components/HomeView/HomeView';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import removeLoading from 'helpers/removeLoading';
import PostsView from 'components/PostsView/PostsView';
import FourOhFourView from 'components/FourOhFourView/FourOhFourView';

removeLoading();

const App = ({ Router, store, location, context }) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <ScrollToTop>
        <div>
          <Route path="/" exact component={HomeView} />
          <Route path="/posts" exact component={PostsView} />
          <Route path="/posts/:slug" component={PostsView} />
          <Route component={FourOhFourView} />
        </div>
      </ScrollToTop>
    </Router>
  </Provider>
);

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
