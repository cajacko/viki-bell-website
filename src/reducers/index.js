import { combineReducers } from 'redux';
import items from 'reducers/items';
import loading from 'reducers/loading';
import noMorePosts from 'reducers/noMorePosts';
import banner from 'reducers/banner';

export default combineReducers({
  items,
  loading,
  noMorePosts,
  banner,
});
