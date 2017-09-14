import { Provider } from 'react-redux';
import React, { Component } from 'react';
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
import AppError from 'components/AppError/AppError';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getGlobalContent();
  }

  componentWillReceiveProps(props) {
    if (this.props.status === 'loading' && props.status !== 'loading') {
      removeLoading();
    }
  }

  render() {
    if (this.props.status === 'loading') {
      return null;
    }

    if (this.props.status === 'error') {
      return <AppError />;
    }

    const Router = this.props.Router;

    return (
      <Provider store={this.props.store}>
        <Router location={this.props.location} context={this.props.context}>
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
  }
}

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
