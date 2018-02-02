/* @flow */

import { connect } from 'react-redux';
import Title from 'components/Title/Title.component';

const mapStateToProps = (
  { categoriesBySlug, postsBySlug },
  { value, type },
) => {
  let itemId;

  switch (type) {
    case 'CATEGORY':
      itemId = categoriesBySlug[value];
      break;

    case 'POST': {
      const post = postsBySlug[value];
      itemId = post && post.id;
      break;
    }

    default:
      return {};
  }

  return { itemId };
};

export default connect(mapStateToProps)(Title);
