import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import PostLoopItem from 'components/PostLoopItem/PostLoopItem';
import Button from 'components/Button/Button';
import style from 'components/PostLoop/PostLoop.style';
import { getRowWidth } from 'constants/gridItems';
import WindowResize from 'components/WindowResize/WindowResize';

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
    };

    this.temp = true;

    this.id = `PostLoop-${postLoopId += 1}`;

    this.getMorePosts = this.getMorePosts.bind(this);
    this.setActualHeight = this.setActualHeight.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
    this.showAllPosts = this.showAllPosts.bind(this);
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
    if (this.props.data.posts.edges !== nextProps.data.posts.edges) {
      this.showAllPosts(nextProps.data.posts.edges);
    }
  }

  onWindowResize() {
    const rowWidth = getRowWidth();
    let state = { maxHeight: 'none' };

    const itemsPerRow = rowWidth.columns;
    const allPosts = this.state.visiblePosts.concat(
      this.state.hiddenPosts,
    );

    const hiddenCount = allPosts.length % itemsPerRow;
    const visibleCount = allPosts.length - hiddenCount;

    const visiblePosts = allPosts.splice(0, visibleCount);
    const hiddenPosts = allPosts; // As previous splice alters original array

    if (visibleCount !== this.state.visiblePosts.length) {
      state = { ...state, visiblePosts, hiddenPosts };
    }

    this.setState(state);
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

  getMorePosts() {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }

    this.setActualHeight(true, { loading: true });

    const postLoopItemsPerLoad = getRowWidth().postLoopItemsPerLoad;
    const moreCount = postLoopItemsPerLoad - this.state.hiddenPosts.length;

    if (moreCount === 0) {
      this.showAllPosts(this.props.data.posts.edges);
    } else {
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

  showAllPosts(posts) {
    const edges = posts.map((edge, index) => {
      if (!this.state.visiblePosts[index]) {
        return Object.assign({ theme: 'invisible' }, edge);
      }

      return edge;
    });

    this.setState({
      visiblePosts: edges,
      hiddenPosts: [],
      maxHeight: this.state.maxHeight + 1000,
    });

    setTimeout(() => {
      this.setState({
        visiblePosts: this.props.data.posts.edges,
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
      let showMoreText;
      let theme;

      if (this.state.loading) {
        showMoreText = 'Loading';
        theme = 'loading';
      } else {
        showMoreText = 'Show More Posts';
      }

      showMore = (
        <Button
          action={this.getMorePosts}
          theme={theme}
        >
          {showMoreText}
        </Button>
      );
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
