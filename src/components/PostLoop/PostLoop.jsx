import React from 'react';
import PostLoopItem from 'components/PostLoopItem/PostLoopItem';

const posts = [{}, {}, {}];

const PostLoop = () => (
  <div
    className="PostLoop"
    itemScope=""
    itemType="http://schema.org/Blog"
  >
    {
      posts.map(() => (
        <PostLoopItem />
      ))
    }
  </div>
);

export default PostLoop;
