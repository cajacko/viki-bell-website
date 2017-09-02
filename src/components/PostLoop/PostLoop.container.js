/* @flow */

import { connect } from 'react-redux';
import getPosts from 'actions/getPosts';
import PostLoop from 'components/PostLoop/PostLoop.component';
import queryFromTaxValue from 'helpers/queryFromTaxValue';

const mapStateToProps = ({ postLoops }, { taxonomy, value }) => {
  const defaultValue = {
    posts: [],
    noMorePosts: false,
    loading: true,
    error: false,
  };

  if (!postLoops) {
    return defaultValue;
  }

  const query = queryFromTaxValue(taxonomy, value);
  const postLoop = Object.assign({}, postLoops[query]);

  if (postLoop) {
    return postLoop;
  }

  return defaultValue;
};

const mapDispatchToProps = (dispatch, { taxonomy, value }) => ({
  getPosts: (skip = 0) => dispatch(getPosts(taxonomy, value, skip)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostLoop);
