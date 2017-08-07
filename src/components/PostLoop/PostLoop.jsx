import React from 'react';
import PostLoopItem from 'components/PostLoopItem/PostLoopItem';

const posts = [{ id: 1 }, { id: 2 }, { id: 3 }];

const PostLoop = () => (
  <div
    className="PostLoop"
    itemScope=""
    itemType="http://schema.org/Blog"
  >
    {
      posts.map(({ id }) => (
        <PostLoopItem key={id} />
      ))
    }
  </div>
);

export default PostLoop;
