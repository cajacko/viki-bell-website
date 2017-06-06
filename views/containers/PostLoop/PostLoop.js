import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostLoop from 'components/PostLoop/PostLoop';
import { getMorePosts } from 'actions/posts';
import Query from 'containers/Query/Query';

class PostLoopContainer extends React.Component {
  constructor(props) {
    super(props);
    this.getMorePosts = this.getMorePosts.bind(this);
  }

  getMorePosts(numberToGet, offset) {
    this.props.dispatch(getMorePosts(this.props.query, numberToGet, offset));
  }

  render() {
    return (
      <Query
        element={PostLoop}
        query={this.props.query}
        getMorePosts={this.getMorePosts}
        itemsAs="posts"
      />
    );
  }
}

PostLoopContainer.propTypes = {
  query: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(PostLoopContainer);
