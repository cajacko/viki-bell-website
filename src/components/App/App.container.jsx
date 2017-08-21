/* @flow */

import { connect } from 'react-redux';
import getGlobalContent from 'actions/getGlobalContent';
import App from 'components/App/App.component';

const mapDispatchToProps = dispatch => ({
  getGlobalContent: () => dispatch(getGlobalContent()),
});

export default connect(null, mapDispatchToProps)(App);
