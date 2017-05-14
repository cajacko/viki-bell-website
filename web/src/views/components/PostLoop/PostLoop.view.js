import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import PostLoopItem from 'components/PostLoopItem/PostLoopItem';
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

    this.state = {
      loading: props.relay.isLoading(),
      error: false,
      visiblePosts: this.props.data.posts.edges,
      hiddenPosts: [],
      maxHeight: 5000,
      hasMore: this.props.relay.hasMore(),
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
    const hasMore = this.props.relay.hasMore();

    if (this.props.data.posts.edges !== nextProps.data.posts.edges) {
      this.showAllPosts(
        nextProps.data.posts.edges,
        null,
        hasMore,
      );
    } else if (this.state.hasMore !== hasMore) {
      this.setState({ hasMore });
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

    if (visiblePosts.length < minNumberofPosts && !this.state.loading) {
      this.getMorePosts(true);
    } else if (visibleCount !== visibleStateCount && !this.state.loading) {
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
    if (this.props.relay.isLoading()) {
      return;
    }

    let moreCount;
    const postLoopItemsPerLoad = getRowWidth().postLoopItemsPerLoad;
    const state = { loading: true };

    if (ranOutOfPosts) {
      moreCount = postLoopItemsPerLoad;
    } else {
      moreCount = postLoopItemsPerLoad - this.state.hiddenPosts.length;
    }

    if (moreCount === 0) {
      this.showAllPosts(this.props.data.posts.edges);
    } else if (this.props.relay.hasMore()) {
      if (ranOutOfPosts) {
        this.setState(state);
      } else {
        this.setActualHeight(true, state);
      }

      this.props.relay.loadMore(
        moreCount,
        (e) => {
          let error = false;

          if (e) {
            // eslint-disable-next-line
            console.warn('Could not get more posts', e);
            error = e;
          }

          this.setState({ loading: false, error });
        },
      );
    }
  }

  splitVisibleHiddenPosts(columns, posts) {
    let itemsPerRow = columns;
    let allPosts;

    if (!itemsPerRow) {
      itemsPerRow = getRowWidth().columns;
    }

    if (posts) {
      allPosts = Object.assign([], posts);
    } else {
      allPosts = this.state.visiblePosts.concat(
        this.state.hiddenPosts,
      );
    }

    const hiddenCount = allPosts.length % itemsPerRow;
    const visibleCount = allPosts.length - hiddenCount;

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

    if (hasMoreParam) {
      hasMore = hasMoreParam;
    } else {
      hasMore = this.state.hasMore;
    }

    const edges = visiblePosts.map((edge, index) => {
      if (!this.state.visiblePosts[index]) {
        return Object.assign({}, edge, { theme: 'invisible' });
      }

      return edge;
    });

    this.setState({
      visiblePosts: edges,
      hiddenPosts,
      maxHeight: this.state.maxHeight + 1000,
      hasMore,
    });

    setTimeout(() => {
      const visible = this.state.visiblePosts.map(
        edge => Object.assign({}, edge, { theme: null }),
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
      containerPadding = { ...style.container, ...style.containerRecommended };

      recommendedText = (
        <p style={style.recommendedText}>More posts you may like</p>
      );
    } else {
      containerPadding = style.container;

      if (this.state.loading) {
        showMore = <LoadingBar />;
      } else if (!this.state.hasMore) {
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

    return (
      <WindowResize onWindowResize={this.onWindowResize} runOnMount={false}>
        <div style={containerStyles}>
          {recommendedText}
          <div
            id={this.id}
            style={{ ...style.posts, maxHeight: this.state.maxHeight }}
          >
            {
              this.state.visiblePosts.map(edge => (
                <PostLoopItem
                  key={edge.node.id}
                  post={edge.node}
                  inverseColours={this.props.inverseColours}
                  theme={edge.theme}
                />
              ))
            }
          </div>

          {showMore}
        </div>
      </WindowResize>
    );
  }
}

PostLoop.propTypes = {
  data: PropTypes.shape({
    posts: {
      edges: PropTypes.arrayOf(PropTypes.object),
    },
  }).isRequired,
  inverseColours: PropTypes.bool,
  recommendedPosts: PropTypes.bool,
  // eslint-disable-next-line
  relay: PropTypes.object,
};

PostLoop.defaultProps = {
  inverseColours: false,
  recommendedPosts: false,
};

export default Radium(PostLoop);
