/* @flow */

import { connect } from 'react-redux';
import getPost from 'actions/getPost';
import Single from 'components/Single/Single.component';
import getPage from 'actions/getPage';
import { defaultPost } from 'reducers/postsBySlug';

const mapStateToProps = ({ postsBySlug, pagesBySlug }, { slug, type }) => {
  const defaultValue = Object.assign({}, defaultPost);
  defaultValue.loading = true;

  switch (type) {
    case 'POST': {
      if (!postsBySlug) {
        return defaultValue;
      }

      return postsBySlug[slug]
        ? Object.assign({}, postsBySlug[slug])
        : defaultValue;
    }

    case 'PAGE': {
      if (!pagesBySlug) {
        return defaultValue;
      }

      return pagesBySlug[slug]
        ? Object.assign({}, pagesBySlug[slug])
        : defaultValue;
    }

    default:
      defaultValue.loading = false;
      defaultValue.error = true;
      return defaultValue;
  }
};

const mapDispatchToProps = (dispatch, { slug, type }) => ({
  getContent: () => dispatch(type === 'POST' ? getPost(slug) : getPage(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Single);
