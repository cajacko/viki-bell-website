/* @flow */

import { connect } from 'react-redux';
import getPosts from 'actions/getPosts';
import PostLoop from 'components/PostLoop/PostLoop.component';
import queryFromTaxValue from 'helpers/queryFromTaxValue';
import { defaultPostLoop } from 'reducers/postLoops';

const mapStateToProps = (
  { postLoops, categoriesBySlug },
  { taxonomy, value },
) => {
  const defaultValue = Object.assign({ categoriesBySlug }, defaultPostLoop);
  defaultValue.loading = true;

  if (!postLoops) {
    return defaultValue;
  }

  const query = queryFromTaxValue(taxonomy, value);

  return postLoops[query]
    ? Object.assign({ categoriesBySlug }, postLoops[query])
    : defaultValue;
};

const mapDispatchToProps = (dispatch, { taxonomy, value }) => ({
  getPosts: (taxonomyId, skip = 0) =>
    dispatch(getPosts(taxonomy, value, taxonomyId, skip)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostLoop);
