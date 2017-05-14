import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import PostLoopItem from 'components/PostLoopItem/PostLoopItem';
import Button from 'components/Button/Button';
import style from 'components/PostLoop/PostLoop.style';
import { POST_LOOP_ITEMS_PER_LOAD } from 'constants/gridItems';

let postLoopId = 0;

class PostLoop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: props.relay.isLoading(),
      error: false,
      posts: this.props.data.posts.edges,
      maxHeight: 5000,
    };

    this.id = `PostLoop-${postLoopId += 1}`;

    this.getMorePosts = this.getMorePosts.bind(this);
    this.setActualHeight = this.setActualHeight.bind(this);
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
      const edges = nextProps.data.posts.edges.map((edge, index) => {
        if (!this.props.data.posts.edges[index]) {
          return Object.assign({ theme: 'invisible' }, edge);
        }

        return edge;
      });

      this.setState({
        posts: edges,
        maxHeight: this.state.maxHeight + 1000,
      });

      setTimeout(() => {
        this.setState({
          posts: this.props.data.posts.edges,
        });
      }, 100);
    }
  }

  setActualHeight() {
    setTimeout(() => {
      this.setState({
        maxHeight: this.element.offsetHeight,
      });
    }, 100);
  }

  getMorePosts() {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }

    this.setState({ loading: true });

    this.props.relay.loadMore(
      POST_LOOP_ITEMS_PER_LOAD,
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
      <div style={containerStyles}>
        {recommendedText}
        <div
          id={this.id}
          style={{ ...style.posts, maxHeight: this.state.maxHeight }}
        >
          {
            this.state.posts.map(edge => (
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
