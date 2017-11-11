import React, { PureComponent } from 'react';
import NewPostLoopRender from 'components/NewPostLoop/NewPostLoop.render';
import NewFourOhFour from 'components/NewFourOhFour/NewFourOhFour.render';

const postRowsToGetByColumnCount = {
  1: 6,
  2: 3,
  default: 2,
};

const maxWidthsByWindowSize = [
  { window: 800, width: 180 },
  { window: 970, width: 220 },
  { width: 240 },
];

class NewPostLoop extends PureComponent {
  constructor(props) {
    super(props);

    this.getPostsCount = 1;
    const maxLoopItemWidth = this.getMaxLoopItemWidth(window.innerWidth);
    const postsPerRow = this.getPostsPerRow(
      window.innerWidth,
      maxLoopItemWidth,
    );

    this.state = {
      posts: this.getVisiblePosts(props.posts, postsPerRow),
      postsPerRow,
      fourOhFour: false,
      maxLoopItemWidth,
    };

    this.onResize = this.onResize.bind(this);
    this.getPosts = this.getPosts.bind(this);
    this.onClick = this.onClick.bind(this);
    this.getPostsPerRow = this.getPostsPerRow.bind(this);
  }

  componentDidMount() {
    if (this.state.posts.length === 0) {
      this.getPosts(true, this.props);
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

    if (this.props.value !== props.value) {
      this.getPostsCount = 1;
      this.getPosts(true, props);
    }
  }

  getMaxLoopItemWidth(width) {
    for (let i = 0; i < maxWidthsByWindowSize.length; i += 1) {
      if (maxWidthsByWindowSize[i].window) {
        if (width < maxWidthsByWindowSize[i].window) {
          return maxWidthsByWindowSize[i].width;
        }
      } else {
        return maxWidthsByWindowSize[i].width;
      }
    }

    return maxWidthsByWindowSize[maxWidthsByWindowSize.length - 1].width;
  }

  getPosts(init, props) {
    if (!init) this.getPostsCount += 1;

    const numberOfPostsToShow = this.getNumberOfPostsToShow(
      this.state.postsPerRow,
    );

    const visiblePosts = this.getVisiblePosts(
      props.posts,
      this.state.postsPerRow,
    );

    if (numberOfPostsToShow <= visiblePosts.length) {
      this.setState({ posts: visiblePosts });
    } else {
      const skip = props.posts.length;
      const count = this.getPostsPerBatch(this.state.postsPerRow) * 2;

      let taxonomyId;

      if (props.taxonomy && props.value) {
        taxonomyId = props.categoriesBySlug[props.value];

        if (!taxonomyId) {
          this.setState({ fourOhFour: true });
          return;
        }
      }

      if (this.state.fourOhFour === true) {
        this.setState({ fourOhFour: false });
      }

      props.getPosts(taxonomyId, skip, count);
    }
  }

  getPostsPerRow(width, maxLoopItemWidth) {
    let postsPerRow = Math.floor(width / maxLoopItemWidth);

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
    const maxLoopItemWidth = this.getMaxLoopItemWidth(width);
    const postsPerRow = this.getPostsPerRow(width, maxLoopItemWidth);

    let state;

    if (postsPerRow !== this.state.postsPerRow) {
      const visiblePosts = this.getVisiblePosts(this.props.posts, postsPerRow);

      state = { postsPerRow, posts: visiblePosts };
    }

    if (maxLoopItemWidth !== this.state.maxLoopItemWidth) {
      if (state) {
        state.maxLoopItemWidth = maxLoopItemWidth;
      } else {
        state = { maxLoopItemWidth };
      }
    }

    if (state) this.setState(state);
  }

  onClick() {
    this.getPosts(false, this.props);
  }

  render() {
    if (this.state.fourOhFour) {
      return <NewFourOhFour />;
    }

    return (
      <NewPostLoopRender
        posts={this.state.posts}
        postsPerRow={this.state.postsPerRow}
        onResize={this.onResize}
        onClick={this.onClick}
        loading={this.props.loading}
        error={this.props.error}
        noMorePosts={this.props.noMorePosts}
        init={this.props.init}
        maxLoopItemWidth={this.maxLoopItemWidth}
      />
    );
  }
}

export default NewPostLoop;
