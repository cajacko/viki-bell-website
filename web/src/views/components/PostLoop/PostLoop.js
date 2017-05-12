import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import {
  graphql,
  createFragmentContainer,
} from 'react-relay';
import PostLoopItem from 'components/PostLoopItem/PostLoopItem';
import Button from 'components/Button/Button';
import style from 'components/PostLoop/PostLoop.style';

function getMorePosts() {
  // eslint-disable-next-line
  console.log('get more posts');
}

const PostLoop = ({
  data,
  inverseColours,
  recommendedPosts,
}) => {
  let containerStyles;
  let containerPadding;
  let recommendedText = false;
  let showMore = false;

  if (recommendedPosts) {
    containerPadding = { ...style.container, ...style.containerRecommended };

    recommendedText = (
      <p style={style.recommendedText}>More posts you may like</p>
    );
  } else {
    containerPadding = style.container;
    showMore = <Button action={getMorePosts}>Show More Posts</Button>;
  }

  if (inverseColours) {
    containerStyles = { ...containerPadding, ...style.containerInverse };
  } else {
    containerStyles = { ...containerPadding, ...style.containerDefault };
  }

  return (
    <div style={containerStyles}>
      {recommendedText}
      <div style={style.posts}>
        {
          data.posts.edges.map(edge => (
            <PostLoopItem
              key={edge.node.id}
              post={edge.node}
              inverseColours={inverseColours}
            />
          ))
        }
      </div>

      {showMore}
    </div>
  );
};

PostLoop.propTypes = {
  data: PropTypes.shape({
    posts: {
      edges: PropTypes.arrayOf(PropTypes.object),
    },
  }).isRequired,
  inverseColours: PropTypes.bool,
  recommendedPosts: PropTypes.bool,
};

PostLoop.defaultProps = {
  inverseColours: false,
  recommendedPosts: false,
};

export default createFragmentContainer(Radium(PostLoop), {
  data: graphql`
    fragment PostLoop_data on Query {
      posts(
        first: 2147483647  # max GraphQLInt
      ) @connection(key: "PostLoop_posts") {
        edges {
          node {
            id,
            ...PostLoopItem_post,
          },
        },
      },
    }
  `,
});
