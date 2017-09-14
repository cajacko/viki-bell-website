import React, { Component } from 'react';
import PostLoopItem from 'components/PostLoopItem/PostLoopItem';
import Item from 'components/Item/Item';
import Loading from 'components/Loading/Loading';
import ContentError from 'components/ContentError/ContentError';
import FourOhFour from 'components/FourOhFour/FourOhFour';

class SinglePost extends Component {
  componentDidMount() {
    if (this.props.init) {
      this.props.getPost();
    }
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    }

    if (this.props.fourOhFour) {
      return <FourOhFour />;
    }

    if (this.props.error) {
      return <ContentError error={this.props.error} />;
    }

    return <Item element={PostLoopItem} itemId={this.props.id} share />;
  }
}

export default SinglePost;
