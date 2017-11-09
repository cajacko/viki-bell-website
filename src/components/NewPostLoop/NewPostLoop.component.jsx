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

    const postsPerRow = this.getPostsPerRow(window.innerWidth);
    const getPostsCount = 1;

    this.state = {
      posts: this.getVisiblePosts(props.posts, postsPerRow, getPostsCount),
      postsPerRow,
      getPostsCount,
    };

    this.onResize = this.onResize.bind(this);
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

  getPostsPerRow(width) {
    let postsPerRow = Math.floor(width / 200);

    if (postsPerRow < 1) postsPerRow = 1;

    return postsPerRow;
  }

  getVisiblePosts(posts, postsPerRow, getPostsCount) {
    const rowsToShow =
      postRowsToGetByColumnCount[postsPerRow] ||
      postRowsToGetByColumnCount.default;

    const postCountToShow = rowsToShow * postsPerRow * getPostsCount;

    return posts.slice(0, postCountToShow);
  }

  onResize(width) {
    const postsPerRow = this.getPostsPerRow(width);

    if (postsPerRow !== this.state.postsPerRow) {
      const visiblePosts = this.getVisiblePosts(
        this.props.posts,
        postsPerRow,
        this.state.getPostsCount,
      );

      this.setState({ postsPerRow, posts: visiblePosts });
    }
  }

  render() {
    return (
      <NewPostLoopRender
        posts={this.state.posts}
        postsPerRow={this.state.postsPerRow}
        onResize={this.onResize}
      />
    );
  }
}

export default NewPostLoop;
