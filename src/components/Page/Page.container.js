/* @flow */

import { connect } from 'react-redux';
import getPage from 'actions/getPage';
import Page from 'components/Page/Page.component';
import { defaultPost } from 'reducers/postsBySlug';

const mapStateToProps = ({ pagesBySlug }, { slug }) => {
  const defaultValue = Object.assign({}, defaultPost);
  defaultValue.loading = true;

  if (!pagesBySlug) {
    return defaultValue;
  }

  return pagesBySlug[slug]
    ? Object.assign({}, pagesBySlug[slug])
    : defaultValue;
};

const mapDispatchToProps = (dispatch, { slug }) => ({
  getPage: () => dispatch(getPage(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
