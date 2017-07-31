import { combineReducers } from 'redux';
import items from 'reducers/items';
import routes from 'reducers/routes';
import routeData from 'reducers/routeData';
import fourOhFour from 'reducers/fourOhFour';
import loading from 'reducers/loading';
import noMoreProjects from 'reducers/noMoreProjects';

export default combineReducers({
  items,
  routes,
  routeData,
  fourOhFour,
  loading,
  noMoreProjects,
});
