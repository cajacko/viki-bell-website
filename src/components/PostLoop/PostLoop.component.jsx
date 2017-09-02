import React, { Component } from 'react';
import PostLoopItem from 'components/PostLoopItem/PostLoopItem';
import Item from 'components/Item/Item';

class PostLoop extends Component {
  constructor(props) {
    super(props);

    this.getPosts = this.getPosts.bind(this);
  }

  componentDidMount() {
    if (this.props.init) {
      this.getPosts();
    }
  }

  getPosts() {
    this.props.getPosts(this.props.posts.length);
  }

  render() {
    return (
      <div
        className="PostLoop"
        itemScope=""
        itemType="http://schema.org/Blog"
      >
        {this.props.posts &&
          this.props.posts.map(id => (
            <Item key={id} element={PostLoopItem} itemId={id} />
          ))
        }
      </div>
    );
  }
}

export default PostLoop;
