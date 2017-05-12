import React from 'react';

import {
  graphql,
  createFragmentContainer,
} from 'react-relay';

import Post from './Post';

const PostLoop = ({ data }) => {
  // eslint-disable-next-line
  console.warn('PostLoop', data);

  if (!data) {
    return false;
  }

  return (
    <div>
      {data.posts.edges.map(edge => (
        <Post key={edge.node.id} post={edge.node} />
      ))}
    </div>
  );
};

export default createFragmentContainer(PostLoop, {
  data: graphql`
    fragment PostLoop_data on Query {
      posts(
        first: 2147483647  # max GraphQLInt
      ) @connection(key: "PostLoop_posts") {
        edges {
          node {
            id,
            ...Post_post,
          },
        },
      },
    }
  `,
});
