import React, { PureComponent } from 'react';
import NewPostLoopRender from 'components/NewPostLoop/NewPostLoop.render';

const postRowsToGetByColumnCount = {
  1: 6,
  2: 3,
  default: 2,
};

class NewPostLoop extends PureComponent {
  constructor(props) {
    super(props);

    const postsPerRow = 4;
    const getPostsCount = 1;

    this.state = {
      posts: this.getVisiblePosts(props.posts, postsPerRow, getPostsCount),
      postsPerRow,
      getPostsCount,
    };

    this.getVisiblePosts = this.getVisiblePosts.bind(this);
  }

  componentDidMount() {
    this.props.getPosts();
  }

  componentWillReceiveProps(props) {
    this.setState({
      posts: this.getVisiblePosts(
        props.posts,
        this.state.postsPerRow,
        this.state.getPostsCount,
      ),
    });
  }

  getVisiblePosts(posts, postsPerRow, getPostsCount) {
    const rowsToShow =
      postRowsToGetByColumnCount[postsPerRow] ||
      postRowsToGetByColumnCount.default;

    const postCountToShow = rowsToShow * postsPerRow * getPostsCount;

    return posts.slice(0, postCountToShow);
  }

  render() {
    return (
      <NewPostLoopRender
        posts={this.state.posts}
        postsPerRow={this.state.postsPerRow}
      />
    );
  }
}

export default NewPostLoop;
