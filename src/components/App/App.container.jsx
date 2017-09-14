/* @flow */

import { connect } from 'react-redux';
import getGlobalContent from 'actions/getGlobalContent';
import App from 'components/App/App.component';

const mapStateToProps = ({ globalStatus }) => ({ status: globalStatus });

const mapDispatchToProps = dispatch => ({
  getGlobalContent: () => dispatch(getGlobalContent()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
