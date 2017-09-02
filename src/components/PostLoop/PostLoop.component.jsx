import React, { Component } from 'react';
import PostLoopItem from 'components/PostLoopItem/PostLoopItem';

class PostLoop extends Component {
  componentDidMount() {
    this.props.getPosts();
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
            <PostLoopItem key={id} />
          ))
        }
      </div>
    );
  }
}

export default PostLoop;
