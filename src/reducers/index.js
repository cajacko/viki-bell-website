import { combineReducers } from 'redux';
import items from 'reducers/items';
import globalStatus from 'reducers/globalStatus';
import noMorePosts from 'reducers/noMorePosts';
import banner from 'reducers/banner';
import postLoops from 'reducers/postLoops';
import postsBySlug from 'reducers/postsBySlug';
import tweets from 'reducers/tweets';
import categoriesBySlug from 'reducers/categoriesBySlug';
import preview from 'reducers/preview';
import pagesBySlug from 'reducers/pagesBySlug';
import maxPostLimit from 'reducers/maxPostLimit';
import profileImage from 'reducers/profileImage';

export default combineReducers({
  items,
  globalStatus,
  noMorePosts,
  banner,
  postLoops,
  postsBySlug,
  pagesBySlug,
  tweets,
  categoriesBySlug,
  preview,
  maxPostLimit,
  profileImage,
});
