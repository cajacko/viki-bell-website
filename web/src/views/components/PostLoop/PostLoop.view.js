import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import PostLoopItem from 'components/PostLoopItem/PostLoopItem';
import Button from 'components/Button/Button';
import style from 'components/PostLoop/PostLoop.style';

/*
set initial posts as visible
when new posts are added set style to invisible
after css animation timeout set all posts to visible
*/

// function setInitialPostsAsVisible(posts) {
//   return posts.map(post => Object.assign({ theme: 'visible' }, post));
// }

class PostLoop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: props.relay.isLoading(),
      error: false,
      posts: this.props.data.posts.edges,
    };

    this.getMorePosts = this.getMorePosts.bind(this);
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
      });

      // Set timeout
    }
  }

  getMorePosts() {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }

    this.setState({ loading: true });

    this.props.relay.loadMore(
      3,
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
        <div style={style.posts}>
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
