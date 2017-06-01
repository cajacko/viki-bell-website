import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import PostLoopItem from 'containers/PostLoopItem/PostLoopItem';
import Button from 'components/Button/Button';
import style from 'components/PostLoop/PostLoop.style';
import { getRowWidth } from 'constants/gridItems';
import WindowResize from 'components/WindowResize/WindowResize';
import LoadingBar from 'components/LoadingBar/LoadingBar';
import NoMorePosts from 'components/NoMorePosts/NoMorePosts';

let postLoopId = 0;

class PostLoop extends React.Component {
  constructor(props) {
    super(props);

    const {
      visiblePosts,
      hiddenPosts,
    } = this.splitVisibleHiddenPosts(null, this.props.posts);

    this.state = {
      error: false,
      visiblePosts,
      hiddenPosts,
      maxHeight: 5000,
    };

    this.temp = true;

    this.id = `PostLoop-${postLoopId += 1}`;

    this.getMorePosts = this.getMorePosts.bind(this);
    this.setActualHeight = this.setActualHeight.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
    this.showAllPosts = this.showAllPosts.bind(this);
    this.splitVisibleHiddenPosts = this.splitVisibleHiddenPosts.bind(this);
  }

  componentDidMount() {
    this.element = document.getElementById(this.id);
    this.setActualHeight();
    this.element.addEventListener('transitionend', (args) => {
      if (args.propertyName === 'max-height') {
        this.setActualHeight();
      }
    }, true);
  }

  componentWillReceiveProps(nextProps) {
    const hasMore = this.props.hasMore;

    if (this.props.posts !== nextProps.posts) {
      this.showAllPosts(
        nextProps.posts,
        null,
        hasMore,
      );
    } else {
      // this.setState({ hasMore }); // TODO: Set has more in props
      // eslint-disable-next-line
      console.warn('SET HAS MORE');
    }
  }

  onWindowResize() {
    const state = { maxHeight: 'none' };
    const rowWidth = getRowWidth();
    const {
      visiblePosts,
      hiddenPosts,
    } = this.splitVisibleHiddenPosts(rowWidth.columns);
    const visibleCount = visiblePosts.length;
    const visibleStateCount = this.state.visiblePosts.length;
    const minNumberofPosts = rowWidth.postLoopItemsPerLoad;

    const tooFewPosts = visiblePosts.length < minNumberofPosts;

    if (tooFewPosts && !this.props.loading && !this.props.recommendedPosts) {
      this.getMorePosts(true);
    } else if (visibleCount !== visibleStateCount && !this.props.loading) {
      this.setState({ ...state, visiblePosts, hiddenPosts });
    } else if (this.state.maxHeight !== 'none') {
      this.setState(state);
    }
  }

  setActualHeight(skipTimeout, additionalState = {}) {
    const setState = () => this.setState({
      maxHeight: this.element.offsetHeight,
      ...additionalState,
    });

    if (skipTimeout) {
      setState();
    } else {
      setTimeout(() => setState(), 100);
    }
  }

  getMorePosts(ranOutOfPosts) {
    if (this.props.loading) {
      return;
    }

    let moreCount;
    const postLoopItemsPerLoad = getRowWidth().postLoopItemsPerLoad;
    const state = {};
    // const state = { loading: true }; // TODO: Loading in props
    // eslint-disable-next-line
    console.warn('SET LOADING');

    if (ranOutOfPosts) {
      moreCount = postLoopItemsPerLoad;
    } else {
      moreCount = postLoopItemsPerLoad - this.state.hiddenPosts.length;
    }

    if (moreCount === 0) {
      this.showAllPosts(this.props.posts);
    } else if (this.props.hasMore) {
      if (ranOutOfPosts) {
        this.setState(state);
      } else {
        this.setActualHeight(true, state);
      }

      // TODO: Load More posts
      // eslint-disable-next-line
      console.warn('LOAD MORE');
      // this.props.relay.loadMore(
      //   moreCount,
      //   (e) => {
      //     let error = false;
      //
      //     if (e) {
      //       // eslint-disable-next-line
      //       console.warn('Could not get more posts', e);
      //       error = e;
      //     }
      //
      //     // this.setState({ loading: false, error }); // TODO: Loading in props
      //     // eslint-disable-next-line
      //     console.warn('SET LOADING');
      //     this.setState({ error });
      //   },
      // );
    }
  }

  splitVisibleHiddenPosts(columns, posts) {
    let itemsPerRow = columns;
    let allPosts;
    const rowWidth = getRowWidth();
    const postLoopItemsPerLoad = rowWidth.postLoopItemsPerLoad;

    if (!itemsPerRow) {
      itemsPerRow = rowWidth.columns;
    }

    if (posts) {
      allPosts = Object.assign([], posts);
    } else {
      allPosts = this.state.visiblePosts.concat(
        this.state.hiddenPosts,
      );
    }

    let visibleCount;
    let hiddenCount;

    if (this.props.recommendedPosts) {
      switch (itemsPerRow) {
        case 1:
          visibleCount = 2;
          break;
        case 2:
          visibleCount = 4;
          break;
        default:
          visibleCount = itemsPerRow;
      }
    } else {
      hiddenCount = allPosts.length % itemsPerRow;
      visibleCount = allPosts.length - hiddenCount;
    }

    if (visibleCount < postLoopItemsPerLoad) {
      visibleCount = postLoopItemsPerLoad;
    }

    const visiblePosts = allPosts.splice(0, visibleCount);
    const hiddenPosts = allPosts; // As previous splice alters original array

    return { visiblePosts, hiddenPosts };
  }

  showAllPosts(posts, itemsPerRow, hasMoreParam) {
    const {
      visiblePosts,
      hiddenPosts,
    } = this.splitVisibleHiddenPosts(itemsPerRow, posts);

    let hasMore;

    if (hasMoreParam === true || hasMoreParam === false) {
      hasMore = hasMoreParam;
    } else {
      hasMore = this.props.hasMore;
    }

    const postItems = visiblePosts.map((postItem, index) => {
      if (!this.state.visiblePosts[index]) {
        return Object.assign({}, postItem, { theme: 'invisible' });
      }

      return postItem;
    });

    // eslint-disable-next-line
    console.warn('Set has more');

    this.setState({
      visiblePosts: postItems,
      hiddenPosts,
      maxHeight: this.state.maxHeight + 1000,
      // hasMore, // TODO: Set has more in props
    });

    setTimeout(() => {
      const visible = this.state.visiblePosts.map(
        postItem => Object.assign({}, postItem, { theme: null }),
      );

      this.setState({
        visiblePosts: visible,
      });
    }, 100);
  }

  render() {
    let containerStyles;
    let containerPadding;
    let recommendedText = false;
    let showMore = false;

    if (this.props.recommendedPosts) {
      containerPadding = { ...style.container, ...style.paddingTop };

      recommendedText = (
        <p style={style.heading}>More posts you may like</p>
      );
    } else {
      containerPadding = style.container;

      if (this.props.loading) {
        showMore = <LoadingBar />;
      } else if (!this.props.hasMore) {
        showMore = <NoMorePosts />;
      } else {
        showMore = (
          <Button action={() => this.getMorePosts()}>Show More Posts</Button>
        );
      }
    }

    if (this.props.inverseColours) {
      containerStyles = { ...containerPadding, ...style.containerInverse };
    } else {
      containerStyles = { ...containerPadding, ...style.containerDefault };
    }

    let content;

    if (this.props.posts.length === 0) {
      containerStyles = { ...containerStyles, ...style.noMorePosts };
      content = (
        <p style={style.heading}>
          Oh no, I haven&apos;t written any posts for this page yet.
        </p>
      );
    } else {
      content = (
        <div>
          {recommendedText}
          <div
            id={this.id}
            style={{ ...style.posts, maxHeight: this.state.maxHeight }}
          >
            {
              this.state.visiblePosts.map(postItem => (
                <PostLoopItem
                  key={postItem.id}
                  inverseColours={this.props.inverseColours}
                  theme={postItem.theme}
                />
              ))
            }
          </div>

          {showMore}
        </div>
      );
    }

    return (
      <WindowResize onWindowResize={this.onWindowResize} runOnMount={false}>
        <div style={containerStyles}>
          {content}
        </div>
      </WindowResize>
    );
  }
}

PostLoop.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    theme: PropTypes.string,
  })).isRequired,
  inverseColours: PropTypes.bool,
  recommendedPosts: PropTypes.bool,
  loading: PropTypes.bool,
  hasMore: PropTypes.bool.isRequired,
};

PostLoop.defaultProps = {
  inverseColours: false,
  recommendedPosts: false,
  loading: false,
};

export default Radium(PostLoop);
