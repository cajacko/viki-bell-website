import React from 'react';

import {
  graphql,
  createFragmentContainer,
} from 'react-relay';


const Post = createFragmentContainer(
  ({ post }) => {
    console.warn('Post', post);

    if (!post) {
      return false;
    }

    return (
      <div>
        {post.title}/{post.excerpt}: {post.date}
      </div>
    );
  },
  {
    post: graphql`
      fragment Post_post on Post {
        id
        postId
        title
        excerpt
        date
        image
        category
      }
    `,
  },
);

export default Post;
