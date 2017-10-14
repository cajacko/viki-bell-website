/* @flow */

import { connect } from 'react-redux';
import getPost from 'actions/getPost';
import SinglePost from 'components/SinglePost/SinglePost.component';
import { defaultPost } from 'reducers/postsBySlug';

const mapStateToProps = ({ postsBySlug }, { slug }) => {
  const defaultValue = Object.assign({}, defaultPost);
  defaultValue.loading = true;

  if (!postsBySlug) {
    return defaultValue;
  }

  return postsBySlug[slug]
    ? Object.assign({}, postsBySlug[slug])
    : defaultValue;
};

const mapDispatchToProps = (dispatch, { slug }) => ({
  getPost: () => dispatch(getPost(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
