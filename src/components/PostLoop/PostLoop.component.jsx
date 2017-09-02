import React, { Component } from 'react';
import PostLoopItem from 'components/PostLoopItem/PostLoopItem';

class PostLoop extends Component {
  constructor(props) {
    super(props);

    this.getPosts = this.getPosts.bind(this);
  }

  componentDidMount() {
    this.getPosts();
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
            <PostLoopItem key={id} />
          ))
        }
      </div>
    );
  }
}

export default PostLoop;
