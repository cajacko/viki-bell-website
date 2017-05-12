import React from 'react';

import {
  graphql,
  createFragmentContainer,
} from 'react-relay';


const Post = ({ post }) => {
  // eslint-disable-next-line
  console.warn('Post', post);

  if (!post) {
    return false;
  }

  return (
    <div>
      {post.title}/{post.excerpt}: {post.date}
    </div>
  );
};

export default createFragmentContainer(Post, {
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
});
