import React, { Component } from 'react';
import PostLoopItem from 'components/PostLoopItem/PostLoopItem';
import Item from 'components/Item/Item';

class SinglePost extends Component {
  componentDidMount() {
    if (this.props.init) {
      this.props.getPost();
    }
  }

  render() {
    return <Item element={PostLoopItem} itemId={this.props.id} share />;
  }
}

export default SinglePost;
