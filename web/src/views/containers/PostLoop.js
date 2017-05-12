import React from 'react';

import {
  graphql,
  createFragmentContainer,
} from 'react-relay';

import Post from './Post';

const PostLoop = createFragmentContainer(
  ({ posts }) => {
    console.warn('PostLoop', posts);

    if (!posts) {
      return false;
    }

    return (
      <div>
        {posts.map(entry => (
          <Post data={entry} />
        ))}
      </div>
    );
  },
  graphql`
    fragment PostLoop_posts on Query {
      posts(first: 5) @connection(key: "PostLoop_posts") {
        edges {
          node {
            ...Post_post
          }
        }
      }
    }
  `,
);

export default PostLoop;
