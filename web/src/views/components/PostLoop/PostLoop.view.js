import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import PostLoopItem from 'components/PostLoopItem/PostLoopItem';
import Button from 'components/Button/Button';
import style from 'components/PostLoop/PostLoop.style';

class PostLoop extends React.Component {
  constructor(props) {
    super(props);

    this.getMorePosts = this.getMorePosts.bind(this);
  }

  getMorePosts() {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }

    this.props.relay.loadMore(
      2,
      (e) => {
        // eslint-disable-next-line
        console.warn('Could not get more posts', e);
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
      showMore = <Button action={this.getMorePosts}>Show More Posts</Button>;
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
            this.props.data.posts.edges.map(edge => (
              <PostLoopItem
                key={edge.node.id}
                post={edge.node}
                inverseColours={this.props.inverseColours}
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
