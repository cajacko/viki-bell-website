/* @flow */

import React from 'react';
import {
  QueryRenderer,
  graphql,
} from 'react-relay';
import PropTypes from 'prop-types';
import environment from 'views/relayEnvironment';
import Posts from 'components/Posts/Posts';

const query = graphql`
  query PostsQuery {
    posts(first: 5) {
      edges {
        cursor
        node {
          id
          postId
          title
          excerpt
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

const PostsContainer = () => (
  <QueryRenderer
    environment={environment}
    query={query}
    render={({ error, props }) => {
      if (error) {
        return <div>{error.message}</div>;
      } else if (props) {
        const posts = [];

        props.posts.edges.map(post => posts.push(post.node));

        return (
          <Posts
            posts={posts}
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
};

PostsContainer.defaultProps = {
  posts: {
    edges: [],
  },
};

export default PostsContainer;
