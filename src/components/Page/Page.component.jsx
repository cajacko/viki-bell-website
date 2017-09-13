import React, { Component } from 'react';
import PostLoopItem from 'components/PostLoopItem/PostLoopItem';
import Item from 'components/Item/Item';

class SinglePage extends Component {
  componentDidMount() {
    if (this.props.init) {
      this.props.getPage();
    }
  }

  render() {
    return <Item element={PostLoopItem} itemId={this.props.id} share />;
  }
}

export default SinglePage;
