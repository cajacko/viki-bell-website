import { combineReducers } from 'redux';
import items from 'reducers/items';
import loading from 'reducers/loading';
import noMorePosts from 'reducers/noMorePosts';
import banner from 'reducers/banner';
import postLoops from 'reducers/postLoops';
import postsBySlug from 'reducers/postsBySlug';
import tweets from 'reducers/tweets';
import categoriesBySlug from 'reducers/categoriesBySlug';
import preview from 'reducers/preview';
import pagesBySlug from 'reducers/pagesBySlug';

export default combineReducers({
  items,
  loading,
  noMorePosts,
  banner,
  postLoops,
  postsBySlug,
  pagesBySlug,
  tweets,
  categoriesBySlug,
  preview,
});
