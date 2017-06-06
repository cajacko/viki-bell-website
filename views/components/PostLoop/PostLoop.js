/* eslint max-lines: 0 */
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

    this.state = {
      visiblePosts: [],
      hiddenPosts: [],
      maxHeight: 5000,
    };

    this.id = `PostLoop-${postLoopId += 1}`;

    this.showHidePosts = this.showHidePosts.bind(this);
    // this.getMorePosts = this.getMorePosts.bind(this);
    // this.setActualHeight = this.setActualHeight.bind(this);
    // this.onWindowResize = this.onWindowResize.bind(this);
    // this.showAllPosts = this.showAllPosts.bind(this);
    // this.splitVisibleHiddenPosts = this.splitVisibleHiddenPosts.bind(this);
  }

  componentWillMount() {
    this.showHidePosts();
  }

  // componentDidMount() {
  //   this.element = document.getElementById(this.id);
  //   this.setActualHeight();
  //   this.element.addEventListener('transitionend', (args) => {
  //     if (args.propertyName === 'max-height') {
  //       this.setActualHeight();
  //     }
  //   }, true);
  // }

  componentWillReceiveProps(nextProps) {
    if (this.props.posts.length < nextProps.posts.length) {
      this.showHidePosts(nextProps.posts, true);
    } else if (this.props.posts !== nextProps.posts) {
      this.showHidePosts(nextProps.posts);
    }
  }
  //
  // setActualHeight(skipTimeout, additionalState = {}) {
  //   const setState = () => this.setState({
  //     maxHeight: this.element.offsetHeight,
  //     ...additionalState,
  //   });
  //
  //   if (skipTimeout) {
  //     setState();
  //   } else {
  //     setTimeout(() => setState(), 100);
  //   }
  // }
  //
  getMorePosts(numberToGetProp) {
    if (!this.props.loading) {
      let numberToGet = numberToGetProp;

      if (numberToGet === undefined) {
        numberToGet = getRowWidth().postLoopItemsPerLoad;
      }

      this.props.getMorePosts(numberToGet, this.props.posts.length);
    }
  }

  showHidePosts(posts, add) {
    const { columns, postLoopItemsPerLoad } = getRowWidth();
    let allPosts;
    let visibleCount = 0;

    if (posts) {
      allPosts = Object.assign([], posts);
    } else {
      allPosts = Object.assign([], this.props.posts);
    }

    if (this.props.recommendedPosts) {
      switch (columns) {
        case 1:
          visibleCount = 2;
          break;
        case 2:
          visibleCount = 4;
          break;
        default:
          visibleCount = columns;
      }
    } else {
      if (this.state.visiblePosts.length === 0) {
        visibleCount = postLoopItemsPerLoad;
      } else {
        while (visibleCount < this.state.visiblePosts.length) {
          visibleCount += columns;
        }
      }

      if (add) {
        visibleCount += postLoopItemsPerLoad;
      }
    }

    if (visibleCount > this.props.posts.length) {
      visibleCount = 0;

      while (visibleCount < this.props.posts.length) {
        visibleCount += columns;
      }

      const numberToGet = this.props.posts.length - visibleCount;
      this.getMorePosts(numberToGet, this.props.posts.length);
    }

    let visiblePosts = allPosts.splice(0, visibleCount);
    const hiddenPosts = allPosts; // As previous splice alters original array
    let transitionPosts = false;

    visiblePosts = visiblePosts.map((visiblePost) => {
      const post = { id: visiblePost };

      if (add) {
        if (this.state.visiblePosts.includes(visiblePost)) {
          post.theme = null;
        } else {
          transitionPosts = true;
          post.theme = 'invisible';
        }
      } else {
        post.theme = null;
      }

      return post;
    });

    this.setState({ visiblePosts, hiddenPosts });

    if (transitionPosts) {
      setTimeout(() => {
        visiblePosts = this.state.visiblePosts.map(
          postItem => Object.assign({}, postItem, { theme: null }),
        );

        this.setState({ visiblePosts });
      }, 100);
    }
  }
  //
  // showAllPosts(posts, itemsPerRow, hasMoreParam) {
  //   const {
  //     visiblePosts,
  //     hiddenPosts,
  //   } = this.splitVisibleHiddenPosts(itemsPerRow, posts);
  //
  //   let hasMore;
  //
  //   if (hasMoreParam === true || hasMoreParam === false) {
  //     hasMore = hasMoreParam;
  //   } else {
  //     hasMore = this.props.hasMore;
  //   }
  //
  //   const postItems = visiblePosts.map((postItem, index) => {
  //     if (!this.state.visiblePosts[index]) {
  //       return Object.assign({}, postItem, { theme: 'invisible' });
  //     }
  //
  //     return postItem;
  //   });
  //
  //   // eslint-disable-next-line
  //   console.warn('Set has more');
  //
  //   this.setState({
  //     visiblePosts: postItems,
  //     hiddenPosts,
  //     maxHeight: this.state.maxHeight + 1000,
  //     // hasMore, // TODO: Set has more in props
  //   });
  //
  //   setTimeout(() => {
  //     const visible = this.state.visiblePosts.map(
  //       postItem => Object.assign({}, postItem, { theme: null }),
  //     );
  //
  //     this.setState({
  //       visiblePosts: visible,
  //     });
  //   }, 100);
  // }

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
          <Button action={() => this.showHidePosts(this.props.posts, true)}>
            Show More Posts
          </Button>
        );
      }
    }

    if (this.props.inverseColours) {
      containerStyles = { ...containerPadding, ...style.containerInverse };
    } else {
      containerStyles = { ...containerPadding, ...style.containerDefault };
    }

    let content;

    if (this.state.visiblePosts.length === 0) {
      containerStyles = { ...containerStyles, ...style.noMorePosts };
      content = (
        <p style={style.heading}>
          Oh no, looks like we have lost the posts, help!.
        </p>
      );
    } else if (this.props.posts.length === 0) {
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
      <WindowResize
        onWindowResize={() => this.showHidePosts()} runOnMount={false}
      >
        <div style={containerStyles}>
          {content}
        </div>
      </WindowResize>
    );
  }
}

PostLoop.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.number).isRequired,
  inverseColours: PropTypes.bool,
  recommendedPosts: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  hasMore: PropTypes.bool.isRequired,
  getMorePosts: PropTypes.func.isRequired,
};

PostLoop.defaultProps = {
  inverseColours: false,
  recommendedPosts: false,
};

export default Radium(PostLoop);
