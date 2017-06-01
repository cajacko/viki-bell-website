import React from 'react';
import PostLoop from 'components/PostLoop/PostLoop';

const PostLoopContainer = () => {
  const theme = 'invisible';

  const posts = [
    { id: 1, theme },
    { id: 2, theme },
    { id: 3, theme },
    { id: 4, theme },
    { id: 5, theme },
  ];

  return <PostLoop posts={posts} hasMore={false} />;
};

export default PostLoopContainer;
