import { combineReducers } from 'redux';
import items from 'reducers/items';
import loading from 'reducers/loading';
import noMorePosts from 'reducers/noMorePosts';

export default combineReducers({
  items,
  loading,
  noMorePosts,
});
