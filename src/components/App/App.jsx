import { Provider } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import HomeView from 'components/HomeView/HomeView';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import removeLoading from 'helpers/removeLoading';
import PostsView from 'components/PostsView/PostsView';
import PostView from 'components/PostView/PostView';
import FourOhFourView from 'components/FourOhFourView/FourOhFourView';
import SitemapView from 'components/SitemapView/SitemapView';
import CategoriesView from 'components/CategoriesView/CategoriesView';
import CategoryView from 'components/CategoryView/CategoryView';
import PageView from 'components/PageView/PageView';

removeLoading();

const App = ({ Router, store, location, context }) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <ScrollToTop>
        <Switch>
          <Route path="/" exact component={HomeView} />
          <Route path="/sitemap" exact component={SitemapView} />
          <Route path="/posts" exact component={PostsView} />
          <Route path="/posts/:slug" component={PostView} />
          <Route path="/categories" exact component={CategoriesView} />
          <Route path="/categories/:slug" component={CategoryView} />
          <Route path="/:slug" component={PageView} />
          <Route component={FourOhFourView} />
        </Switch>
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
