/* @flow */

import { connect } from 'react-redux';
import getTweets from 'actions/getTweets';
import Twitter from 'components/Twitter/Twitter.component';

const mapStateToProps = ({ tweets }) => ({ tweets });

const mapDispatchToProps = dispatch => ({
  getTweets: () => dispatch(getTweets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Twitter);
