/* @flow */

import React from 'react';
import {
  QueryRenderer,
  graphql,
} from 'react-relay';
import PropTypes from 'prop-types';
import moment from 'moment';
import environment from 'views/relayEnvironment';
import PostLoop from 'components/PostLoop/PostLoop';

const query = graphql`
  query PostLoopQuery {
    posts(first: 5) {
      edges {
        cursor
        node {
          id
          postId
          title
          date
          image
          category
          imageAlt
          postSlug
          categorySlug
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

const PostsContainer = ({ inverseColours, recommendedPosts }) => (
  <QueryRenderer
    environment={environment}
    query={query}
    render={({ error, props }) => {
      if (error) {
        return <div>{error.message}</div>;
      } else if (props) {
        const posts = [];

        props.posts.edges.map((post) => {
          const finalPostObject = Object.assign({}, post.node);

          finalPostObject.date = moment.unix(finalPostObject.date);

          return posts.push(finalPostObject);
        });

        return (
          <PostLoop
            posts={posts}
            inverseColours={inverseColours}
            recommendedPosts={recommendedPosts}
          />
        );
      }

      return <div>Loading</div>;
    }}
  />
);

PostsContainer.propTypes = {
  posts: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({

    })),
  }),
  inverseColours: PropTypes.bool,
  recommendedPosts: PropTypes.bool,
};

PostsContainer.defaultProps = {
  posts: {
    edges: [],
  },
  inverseColours: false,
  recommendedPosts: false,
};

export default PostsContainer;
