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
    this.getPostsCount = 1;

    this.state = {
      posts: this.getVisiblePosts(props.posts, postsPerRow),
      postsPerRow,
    };

    this.onResize = this.onResize.bind(this);
    this.getPosts = this.getPosts.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    if (this.state.posts.length === 0) {
      this.getPosts(true);
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      posts: this.getVisiblePosts(
        props.posts,
        this.state.postsPerRow,
        this.getPostsCount,
      ),
    });
  }

  getPosts(init) {
    if (!init) this.getPostsCount += 1;

    const numberOfPostsToShow = this.getNumberOfPostsToShow(
      this.state.postsPerRow,
    );

    const visiblePosts = this.getVisiblePosts(
      this.props.posts,
      this.state.postsPerRow,
    );

    if (numberOfPostsToShow <= visiblePosts.length) {
      this.setState({ posts: visiblePosts });
    } else {
      const skip = this.props.posts.length;
      const count = this.getPostsPerBatch(this.state.postsPerRow) * 2;
      this.props.getPosts(undefined, skip, count);
    }
  }

  getPostsPerRow(width) {
    let postsPerRow = Math.floor(width / 200);

    if (postsPerRow < 1) postsPerRow = 1;

    return postsPerRow;
  }

  getPostsPerBatch(postsPerRow) {
    const rowsToShow =
      postRowsToGetByColumnCount[postsPerRow] ||
      postRowsToGetByColumnCount.default;

    return rowsToShow * postsPerRow;
  }

  getNumberOfPostsToShow(postsPerRow) {
    const postsPerBatch = this.getPostsPerBatch(postsPerRow);

    return postsPerBatch * this.getPostsCount;
  }

  getVisiblePosts(posts, postsPerRow) {
    const postCountToShow = this.getNumberOfPostsToShow(postsPerRow);

    return posts.slice(0, postCountToShow);
  }

  onResize(width) {
    const postsPerRow = this.getPostsPerRow(width);

    if (postsPerRow !== this.state.postsPerRow) {
      const visiblePosts = this.getVisiblePosts(this.props.posts, postsPerRow);

      this.setState({ postsPerRow, posts: visiblePosts });
    }
  }

  onClick() {
    this.getPosts();
  }

  render() {
    return (
      <NewPostLoopRender
        posts={this.state.posts}
        postsPerRow={this.state.postsPerRow}
        onResize={this.onResize}
        onClick={this.onClick}
        loading={this.props.loading}
        error={this.props.error}
      />
    );
  }
}

export default NewPostLoop;
