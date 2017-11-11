/* @flow */

import { connect } from 'react-redux';
import Title from 'components/Title/Title.component';

const mapStateToProps = ({ categoriesBySlug }, { value }) => ({
  itemId: categoriesBySlug[value],
});

export default connect(mapStateToProps)(Title);
